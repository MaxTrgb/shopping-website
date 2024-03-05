//! Start point
$().ready(()=>{
    // ?? first method
    // $("#phone_btn").click(()=>{
    //     alert("u clicked btn!!")
    // })
    // ?? first method
    // $("#phone_btn").on("click", ()=>{
    //     alert("2 you clicked btn!")
    // })
    // ?? switch classes
    $("#phone_btn").on("click", (e)=>{
        $("#phone_btn").toggleClass("active")
        $("#phone_btn").attr("data-id", "80085")
        $("#products_area").hide();
        //$("#products_area").show();
        $(".hero__filter_nav").html(
            "<div>Testing</div>"
        )
    })


})


// ?? clean
// const BTN = document.querySelector("#phone_btn");
// BTN.addEventListener("click", ()=>{
//     alert("you clicked btn!")
// })

