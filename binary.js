// Binary seach is usedful when the information is sorted.

const search = (nums, target) => {
    let left = 0;
    let right = nums.length-1;

    while(left <= right){
        const mid = left + Math.floor((right -left)/ 2);

        if(nums[mid] === target){
            return mid;
        } else if (nums[mid] < target){
            left = mid +1;
        } else{
            right = mid -1;
        }
    }

    return -1;
}

// nums = [-1,0,3,5,9,16], target = 9;
// search(nums, target)


//DEPTH FIRST SEARCH/TRAVERSAL
