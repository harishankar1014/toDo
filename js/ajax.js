var count =0;


$(document).ready(function(){
        $.getJSON("https://jsonplaceholder.typicode.com/todos",function(res,status,xhr){
                // console.log(res);
                for(let i=0;i<res.length;i++)
                {
                        if(res[i].completed==true) {
                                $("div #list").append("<li  disabled='disabled' class='list-group-item' style='text-decoration:line-through'>"+res[i].title+" <input type='checkbox'  onclick='action(this)' checked disabled='diabled'><span></span><button class='btn btn-danger' onclick='test(this)' >X</button></li>");
                        } else {
                                $("div #list").append("<li class='list-group-item'>"+res[i].title+" <input id=i type='checkbox' onclick='action(this)'><button class='btn btn-danger' onclick='test(this)' >X</button></li>");
                        } 
                }
        });
});

function test(i){
        console.log(i.previousElementSibling);
        if(!i.parentElement.hasAttribute("disabled")&&(i.previousElementSibling.checked))
        {
                console.log("delete");
                count--;
        }
        // console.log(count);
        i.parentElement.style.display = "none";
}

function action(i)
{
        console.log(i.checked);
        var x = i.parentElement;
        if(i.checked)
        {
           x.style.textDecoration = "line-through"; 
           count++;
        } else {
                x.style.textDecoration = "none";
                count--;
        }
        console.log(count);
        if(count ==5)
        {
                console.log("maximum count reached");
                var d=document.querySelectorAll("input");
                $("input").attr("disabled","true");
                dailyLimit(count).then(alert("5 tasks are completed!"));
        }

function dailyLimit(count)
{
        return new Promise(function(resolve,reject){
                if(count == 5)
                {
                console.log(count);
                resolve("success");
                }
                else
                {
                        reject("error");
                }
        })
}

// let myPromise = new Promise(function(resolve,reject){
//         if(count==5)
//         {
//                 resolve(alert("5 tasks done"));
//         }
//         else {
//                 reject(console.log("not yet"));
//         }
// })

// function getCount()
// {
//         return count;
// }
}
