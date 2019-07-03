
$("#getoutfit").on("click",function(e) {
  e.preventDefault()
  var garment={
    gender:$("#gender").val(),
    season:$("#season").val(),
    type:$("#type").val(),
    occassion:$("#occassion").val(),
  }
  $.ajax ({
    url:"/api/outfits", method:"POST" ,data:garment
  }).then(function(res){
    console.log(res)
  })
} )
