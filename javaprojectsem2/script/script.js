let ans=document.getElementById('ans');
let userscore=document.getElementById('span1');
let computerscore=document.getElementById('span2');
let k=0;
let j=0;
let choice=document.querySelectorAll('.choice');
for(let i=0;i<choice.length;i++)
    {
       choice[i].addEventListener('click',function()
    {
        let userchoice=choice[i].id;
        let computerselectedvalue=getcomputercchoice();
       console.log(userchoice);
       console.log(computerselectedvalue); 
        if(userchoice == computerselectedvalue)
            {
                console.log('draw');
                ans.textContent="Draw";
            }
            else
            {
                   if(userchoice == "rock" && computerselectedvalue == "scissor"){
                    console.log("you win");
                    userscore.textContent=++k;
                    ans.textContent="You Win";
                   }
                   else
                   {
                    if(userchoice == "rock" && computerselectedvalue == "paper")
                        {
                            console.log("you lose");
                            computerscore.textContent=++j;
                            ans.textContent="You Lose";
                        }
                        else
                        {
                            if(userchoice == "paper" && computerselectedvalue == "rock")
                                {
                                    console.log('you win');
                                    userscore.textContent=++k;
                                    ans.textContent="YOU Win";
                                }
                                else
                                {
                                    if(userchoice == "paper" && computerselectedvalue == "scissor")
                                        {
                                            console.log("you lose");
                                            computerscore.textContent=++j;
                                            ans.textContent="You Lose";
                                        }
                                        else
                                        {
                                            if(userchoice == "scissor" && computerselectedvalue == "rock")
                                                {
                                                    console.log('you lose');
                                                    computerscore.textContent=++j;
                                                    ans.textContent="You Lose";
                                                }
                                                else
                                                {
                                                    if(userchoice == "scissor" && computerselectedvalue == "paper")
                                                        {
                                                            console.log('you win');
                                                            ans.textContent="You Win";
                                                            userscore.textContent=++k;
                                                        }
                                                }
                                        }
                                }
                        }

                   }
            }
    });
    }

    function getcomputercchoice()
        {
            let computerchoices=['rock','paper','scissor'];
            let selectindex=parseInt(Math.random()*3);
            return computerchoices[selectindex];
        }


