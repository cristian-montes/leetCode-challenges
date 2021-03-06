## Codewriting
### Scenario
Your task is to implement a simplified version of text editor.
All operations that should be supported are listed below. Partial credit will be given for each implemented operation. Please submit often to ensure partial credits are captured.

### Implementation tips
Implement operations and provided steps one by one, and not all together, keeping in mind that you will need to make refactors to support each additional step. In the first three levels you can assume that only one text document is modified.

### Note

After every operation, add the current state of the text to the resulting array. The returning array should consist of all the states after each operation is applied and have the same length as the # of input queries.


### Level 1
The editor starts with a blank text document, with the cursor at initial position 0.

1. APPEND <text> should append the inputted string text to the document starting from the current position of the cursor. After the operation, the cursor should be at the end of the added string.

```
queries = [
  ["APPEND", "Hey"],               | "" -> "Hey"
  ["APPEND", " there"],            | "Hey" -> "Hey there"
   ["APPEND", "!"]                  | "Hey there" -> "Hey there!"
]
returns: [ "Hey",
        "Hey there",
           "Hey there!" ]
```
2. MOVE <position> should move the cursor to the specified position. The cursor should be positioned between document characters, and are enumerated sequentially starting from 0. If the specified position is out of bounds, then move the cursor to the nearest available position.

```
queries = [
["APPEND", "Hey you"],           | "" -> "Hey you"
["MOVE", "3"],                   | moves the cursor after the first "y"
["APPEND", ","]                  | "Hey you" -> "Hey, you"
]

returns: [ "Hey you",
           "Hey you",
           "Hey, you" 
        ]
```

3. DELETE should remove the character right after the cursor, if any.
```
queries = [
     ["APPEND", "Hello! world!"],     | "" -> "Hello! world!"
     ["MOVE", "5"],                   | moves the cursor before the first "!"
     ["DELETE"],                      | "Hello! world!" -> "Hello world!"
     ["APPEND", ","]                  | "Hello world!" -> "Hello, world!"
]

 returns: [ "Hello! world!",
            "Hello! world!",
            "Hello world!",
            "Hello, world!" 
          ]
 and

queries = [
    ["APPEND", "!"],                 | "" -> "!"
    ["DELETE"],                      | "!" -> "!"
    ["MOVE", "0"],                   | moves the cursor before the first symbol
    ["DELETE"],                      | "!" -> ""
    ["DELETE"]                       | "" -> ""
 ]

 returns: [ "!",
            "",
            "",
            "",
            "" 
          ]
```
 ### Level 2
 Introduce methods to copy a part of the document text.

 4. SELECT <left> <right> should select the text between the left and right cursor positions. Selection borders should be returned to the bounds of the document. If the selection is empty, it becomes a cursor position. Any modification operation replace the selected text and places the cursor at the end of the modified segment.

 Additionally,

 SELECT and APPEND should replace the selected characters with the appended characters
 SELECT and DELETE should delete the selected characters
 SELECT and MOVE deselects characters if there were any and moves the cursor
 For example, the following operations

```
 queries = [
     ["APPEND", "Hello cruel world!"],  | "" -> "Hello cruel world!"
     ["SELECT", "5", "11"],             | selects " cruel"
     ["APPEND", ","],                   | "Hello cruel world!" -> "Hello, world!"
     ["SELECT", "5", "12"],             | selects ", world"
     ["DELETE"],                        | "Hello, world!" -> "Hello!"
     ["SELECT", "4", "6"],              | selects "o!"
     ["MOVE", "1"]                      | moves cursor before "e", deselects "o!"
]

returns: [ "Hello cruel world!",
          "Hello cruel world!",
            "Hello, world!",
           "Hello, world!",
           "Hello!",
            "Hello!",
            "Hello!" 
         ]

 produce "Hello!" with the cursor positioned after letter H.
 ```

5. COPY should copy the selected text to the clipboard, if there is an active non-empty selection. The current selected text (if any) remains selected after the operation.
6. PASTE should append the text from the clipboard. The current selected text (if any) remains selected after the operation.

```
For example, the following operations

queries = [
    ["APPEND", "Hello, world!"],       | "" -> "Hello, world!"
    ["SELECT", "5", "12"],             | selects ", world"
    ["COPY"],                          | copies ", world"
    ["MOVE", "12"],                    | moves the cursor after "d"
    ["PASTE"],                         | "Hello, world!" -> "Hello, world, world!"
    ["PASTE"]                          | "Hello, world, world!" -> "Hello, world, world, world!"
]

returns: [ "Hello, world!",
           "Hello, world!",
           "Hello, world!",
           "Hello, world!",
           "Hello, world, world!",
           "Hello, world, world, world!" 
        ]
```

### Level 3
The text editor should allow document changes to be tracked and reverted. Consider only operations that actually modify the contents of the text document.

7. UNDO should restore the document to the state before the previous modification or REDO operation. The selection and cursor position should be also restored.

```
For example,

queries = [
    ["APPEND", "Hello, world!"],       | "" -> "Hello, world!"
    ["SELECT", "7", "12"],             | selects "world"
    ["DELETE"],                        | "Hello, world!" -> "Hello, !"
    ["UNDO"],                          | restores "Hello, world!" with "world" selected
    ["APPEND", "you"]                  | "Hello, world!" -> "Hello, you!"
]

returns: [ "Hello, world!",
           "Hello, world!",
           "Hello, !",
           "Hello, world!",
           "Hello, you!" 
        ]
```
8. REDO can only be performed if the document has not been modified since the last UNDO operation. REDO should restore the state before the previous UNDO operation, including the selection and cursor position. Multiple UNDO and REDO operations can be performed in a row.

```
For example,

queries = [
    ["APPEND", "Hello, world!"],       | "" -> "Hello, world!"
    ["SELECT", "7", "12"],             | selects "world"
    ["DELETE"],                        | "Hello, world!" -> "Hello, !"
    ["MOVE", "6"],                     | moves the cursor after the comma 
    ["UNDO"],                          | restores "Hello, world!" with "world" selected
    ["UNDO"],                          | restores initial ""
    ["REDO"],                          | restores "Hello, world!" with "world" selected
    ["REDO"]                           | restores "Hello, !" with the cursor after the comma
]

returns: [ "Hello, world!",
           "Hello, world!",
           "Hello, !",
           "Hello, !",
           "Hello, world!",
           "",
           "Hello, world!",
           "Hello, !" 
        ]

```

### Level 4
The text editor should support multiple text documents with a common clipboard. There might be several opened files, but only one of them is active. The logic of switching between files should be like in a real text editor.

9. OPEN <name> should open a document name in the editor and make it active. If there is no such file, OPEN should create a blank text document. If the file name is opened already but not active, it should become active while preserving the cursor position, the selection, and the modification history.

10. CLOSE should close the active document. The document which was active before the current document should become active instead. CLOSE should reset the cursor to the end of the document and clear the modification history.

Note: it is guaranteed that all operations from previous levels will be executed on the active document. For backward compatibility, assume for Levels 1-3 there is a single, initially active document.

```
For example,

queries = [
    ["OPEN", "document1"],             | creates, opens and makes active document1
    ["APPEND", "Hello, world!"],       | document1: "" -> "Hello, world!"
    ["SELECT", "7", "12"],             | selects "world"
    ["COPY"],                          | copies "world" from document1
    ["DELETE"],                        | deletes selected "world"
    ["OPEN", "document2"],             | creates, opens and makes active document2
    ["PASTE"],                         | document2: "" -> "world"
    ["CLOSE", "document2"],            | closes document2, making document1 active
    ["UNDO"],                          | undoes deleting of "world" in document1
    ["OPEN", "document2"],             | opens as active document2 with cursor at the end
    ["UNDO"]                           | does nothing as the modification history is empty
]

returns: [ "",
           "Hello, world!",
           "Hello, world!",
           "Hello, world!",
           "Hello, !",
           "",
           "world",
           "Hello, !",
           "Hello, world!",
           "world",
           "world" ]
Example

For

queries = [
    ["APPEND", "Hey"],
    ["APPEND", " you"],
    ["APPEND", ", don't"],
    ["APPEND", " "],
    ["APPEND", "let me down"]
]
the output should be

solution(queries) = [
    "Hey",
    "Hey you",
    "Hey you, don't",
    "Hey you, don't ",
    "Hey you, don't let me down"
]
Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.string queries
```
An array of operations need to be applied to the text editor. It is guaranteed that each operation is one of the operations described in the description, all operation parameters are given in correct format, and the text editor will never be in an incorrect state that is not described in the description.

Guaranteed constraints:
1 ??? queries.length ??? 250.

[output] array.string

After every operation, add the current state of the text to the resulting array. The returning array should consist of all the states after each operation is applied and have the same length as the # of input queries.

[JavaScript] Syntax Tips

Prints help message to the console
Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}