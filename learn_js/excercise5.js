function solution(str, ending) {
    if (str.length >= ending.length) {
        var strLength = str.length;
        for (var i = ending.length - 1; i >= 0; i--) {     
            if (ending[i] !== str[strLength - 1]) {
                return false;
            }
             strLength -- ;
        }
        return true;
    }
    return false;
}

