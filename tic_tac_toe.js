//Start game layout
anime({
    targets:'div.box1, div.box2, div.box3',
    translateY: [
        {value: 200, duration: 500},
    ],
    translateX: [
        {value:700, duration: 500},
    ],
});
anime({
    targets:'div.box4, div.box5, div.box6',
    translateY: [
        {value: 200, duration: 500},
    ],
    translateX: [
        {value:700, duration: 500},
    ],
});
anime({
    targets:'div.box7, div.box8, div.box9',
    translateY: [
        {value: 200, duration: 500},
    ],
    translateX: [
        {value:700, duration: 500},
    ],
});
//Start game layout

var a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var taken = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var player = 0;

function check_winner()
{
    if(a[1] == 1 && a[2]==1 && a[3]==1)
    {
        setTimeout(function(){
            alert("CIRCLE WINS");
        }, 500);
        setTimeout(function(){
            location.reload();

        }, 500);
        return true;
    }
    if(a[4] == 1 && a[5]==1 && a[6]==1)
    {
        setTimeout(function(){
            alert("CIRCLE WINS");
        }, 500);
        setTimeout(function(){
            location.reload();

        }, 500);
        return true;
    }
    if(a[7] == 1 && a[8]==1 && a[9]==1)
    {
        setTimeout(function(){
            alert("CIRCLE WINS");
        }, 500);
        setTimeout(function(){
            location.reload();

        }, 500);
        return true;
    }
    if(a[1] == 1 && a[4]==1 && a[7]==1)
    {
        setTimeout(function(){
            alert("CIRCLE WINS");
        }, 500);
        setTimeout(function(){
            location.reload();

        }, 500);
        return true;
    }
    if(a[2] == 1 && a[5]==1 && a[8]==1)
    {
        setTimeout(function(){
            alert("CIRCLE WINS");
        }, 500);
        setTimeout(function(){
            location.reload();

        }, 500);
        return true;
    }
    if(a[3] == 1 && a[6]==1 && a[9]==1)
    {
        setTimeout(function(){
            alert("CIRCLE WINS");
        }, 500);
        setTimeout(function(){
            location.reload();

        }, 500);
        return true;
    }
    if(a[1]== 1 && a[5]==1 && a[9] == 1)
    {
        setTimeout(function(){
            alert("CIRCLE WINS");
        }, 500);
        setTimeout(function(){
            location.reload();

        }, 500);
        return true;
    }

    if(a[3]==1 && a[5]==1 && a[7] == 1)
    {
        setTimeout(function(){
            alert("CIRCLE WINS");
        }, 500);
        setTimeout(function(){
            location.reload();

        }, 500);
        return true;
    }



    if(a[1] == -1 && a[2]== -1 && a[3]== -1)
    {
        setTimeout(function(){
            alert("X WINS");
        }, 500);
        setTimeout(function(){
            location.reload();

        }, 500);
        return true;
    }
    if(a[4] == -1 && a[5]== -1 && a[6]== -1)
    {
        setTimeout(function(){
            alert("X WINS");
        }, 500);
        setTimeout(function(){
            location.reload();

        }, 500);
        return true;
    }
    if(a[7] == -1 && a[8]== -1 && a[9]== -1)
    {
        setTimeout(function(){
            alert("X WINS");
        }, 500);
        setTimeout(function(){
            location.reload();

        }, 500);
        return true;
    }
    if(a[1] == -1 && a[4]== -1 && a[7]== -1)
    {
        setTimeout(function(){
            alert("X WINS");
        }, 500);
        setTimeout(function(){
            location.reload();

        }, 500);
        return true;
    }
    if(a[2] == -1 && a[5]== -1 && a[8]== -1)
    {
        setTimeout(function(){
            alert("X WINS");
        }, 500);
        setTimeout(function(){
            location.reload();

        }, 500);
        return true;
    }
    if(a[3] == -1 && a[6]== -1 && a[9]== -1)
    {
        setTimeout(function(){
            alert("X WINS");
        }, 500);
        setTimeout(function(){
            location.reload();

        }, 500);
        return true;
    }
    if(a[1]== -1 && a[5]== -1 && a[9] == -1)
    {
        setTimeout(function(){
            alert("X WINS");
        }, 500);
        setTimeout(function(){
            location.reload();

        }, 500);
        return true;
    }

    if(a[3]== -1 && a[5]== -1 && a[7] == -1)
    {
        setTimeout(function(){
            alert("X WINS");
        }, 500);
        setTimeout(function(){
            location.reload();

        }, 500);
        return true;
    }
    

}
function check(){
    var count = 0;
    for(i = 0; i<3; i++)
    {
        for(j=0; j<3; j++)
        {
            if(taken[i][j] ==1) count+=1;
        }
    }
    if(check_winner()) return;
    if (count == 9)
    {
        setTimeout(function(){
            alert("END GAME");
        }, 500);
        setTimeout(function(){
            location.reload();

        }, 1000);  
    }
}
function turnred(ID){
    if(a[Number(ID.substring(3, 4))] != 1){
        document.getElementById(ID).style.background = "#FFE7E2";
    }
   

}

function turnwhite(ID){
    if(a[Number(ID.substring(3, 4))] != 1){
        document.getElementById(ID).style.background = "#f5f5f5";
    }
    
}
// 1 is for circle and 0 is for "X"
function turnshape(ID){
    var box_num = Number(ID.substring(3, 4));
    taken[Math.ceil(box_num/3)-1][(box_num+2)%3] = 1; //shift nubmers right by 2 so that they can be moduloed easily
    if(player%2 == 0 && a[box_num] == 0)
    {
        var t = ID.substring(3, 4);
        a[box_num] = 1;
        anime({
            targets: document.getElementById(ID),
            borderRadius: ['0em', '4em'],
            backgroundColor: '#000000',
        });
        player+=1;
        check();
        return;
    }

    if(player%2 == 1 && a[box_num] == 0)
    {
        a[box_num] = -1
        const img = new Image(100, 200);
        img.src = "X-image small.png";
        document.getElementById(ID).innerHTML = '<img src ="' + img.src + '"/>';
        player+=1;
        check();
    }
    
}
