// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".


var longestCommonPrefix = function(strs) {
    
    let prefix = strs[0];
    
    for(let i=1;i<strs.length;i++){
        let j = 0;
        let commenFix =''
        while(j< strs[i].length || j < prefix.length){
           if(prefix[j] === strs[i][j]){
            commenFix += prefix[j];
           }else{
            break 
           }
        j++
        }
        prefix = commenFix;
        if(prefix === '') return ""
    } 
        return prefix;
    };


// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))
// console.log(longestCommonPrefix(["dear","deer","bear"]))