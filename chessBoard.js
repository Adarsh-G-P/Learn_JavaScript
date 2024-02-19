for(i=1;i<=8;i++){
    let row = " "
    for(j =1;j<=8;j++){
        if ((i + j) % 2 === 0) {
            row += " ";
        } else {
            row += "#"; 
        }
    }
    console.log(row)
}

/*Output pattern

  # # # #
 # # # # 
  # # # #
 # # # # 
  # # # #
 # # # # 
  # # # #
 # # # #

*/