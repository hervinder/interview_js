function lcs(str1, str2) {
    let dp = new Array(str2.length + 1);


    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(str1.length + 1).fill(0);
    }
    let max = 0;
    console.log(dp, 'lcsMatrix');

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {

            if (str2[i - 1] == str1[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }

            if (dp[i][j] > max) {
                max = dp[i][j];
            }

        }

    }

    // for (let i = 1; i < dp.length; i++) {
    //     for (let j = 1; j < dp[i].length; j++) {
    //         if (str2[i - 1] == str1[j - 1])
    //             dp[i][j] = 1 + dp[i - 1][j - 1];
    //         else
    //             dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);

    //         if (dp[i][j] > max) {
    //             max = dp[i][j];
    //         }
    //     }
    // }
    return max;

}


lcs("ABCDGHLQR", "AEDPHR")


function lcsMatrix(str1, str2) {

    let dp = new Array(str2.length + 1);

    for (let i = 0; i < dp.length; i++) {

        dp[i] = new Array(str1.length + 1).fill(0);
    }

    let max = 0;

    for (let i = 1; i < dp.length; i++) {

        for (let j = 1; i < dp[i].length; i++) {

            if (str1[i - 1][j - 1] === str2[i - 1][j - 1]) {

                dp[i][j] = 1 + dp[i - 1][j - 1];
            }
            else {

                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
            if (dp[i][j] > max) {
                max = dp[i][j]
            }
        }

    }



}