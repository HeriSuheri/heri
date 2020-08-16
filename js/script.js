//event pada saat link di klik

$('.page-scroll').on('click', function(e){
   console.log('ok'); // ini jika di klik di tiap tombol maka klo cek di inspect- console- muncul 'ok'.
 
   // ambil seluruh elemen page-scroll yaitu var href = $('page-scroll')
   

   //ambil  cuma isi href satu-satu,utk cek klik kanan di browser inspect-console coba di klik tiap -tiap tombol terbawa ga id nya
   var tujuan = $(this).attr('href');
   
   //tangkap elemen yg bersangkutan yg punya id # bisa menggunakan scrollTop atau offset
   var elemenTujuan = $(tujuan);
   
   // pindahkan scroll
   $('html,body').animate({
       scrollTop : elemenTujuan.offset().top-50
    } ,1250,'swing');
  
   e.preventDefault();
    

// mencari jquery waktu transisi selain swing dan linear kunjungi jQuery easing plugin
}); 

// untuk menyimpan parallax

//about
$(window).on('load', function(){
   $('.pKiri').addClass('pMuncul');
   $('.pKanan').addClass('pMuncul');
});


//utk scroll utk jumbotron
$(window).scroll(function() {
   var wScroll = $(this).scrollTop();
   
    //utk jumbotron
   $('.jumbotron img').css({
      'transform' : 'translate(0px, '+ wScroll/4 +'%)'
   });

   $('.jumbotron h1').css({
      'transform' : 'translate(0px, '+ wScroll/2 +'%)'
   });

   $('.jumbotron p').css({
      'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
   });

   //utk portfolio
   if(wScroll > $('.portfolio').offset().top - 250){
      // utk munculkan semua langsung yaitu:
      // $('.portfolio .thumbnail').addClass('muncul');


      // utk munculkan satu satu yaitu:  ket=300 adalah  0,3 detik,ketika per 0,3 detik maka gbr muncul satu-satu
      $('.portfolio .thumbnail').each(function(i){
        setTimeout(function(){
            $('.portfolio .thumbnail').eq(i).addClass('muncul');
        }, 300 * (i+1) );
      });
   }

});