function fade_in(){
  $('#all_container_pop').fadeIn(800);
}
function fade_Out(){
  $('#all_container_pop').fadeOut(800);
}
var vare;
vare=1;
function mostrar_menu(){
  $('#new_responsive_header').fadeIn(800);
  $('#span2').fadeIn(80);
  $('#span1').fadeOut(80);
}

function ocultar_menu(){
  $('#new_responsive_header').fadeOut(800);
  $('#span2').fadeOut(80);
  $('#span1').fadeIn(80);
}
var recibe;
function menu_about(recibe){
      switch(recibe){
        case 1:
          var html1=document.getElementById('container_presentacion');
          html1.style.display='block';
          var html2=document.getElementById("container_politica_editorial");
          html2.style.display="none";
          var html3=document.getElementById('container_proceso_editorial');
          html3.style.display='none';
          var html4=document.getElementById('container_historia');
          html4.style.display='none';
          var html5=document.getElementById('container_equipo');
          html5.style.display='none';

          var active1=document.getElementById('active1');
          active1.style.background='#d8cea3';
          var active2=document.getElementById('active2');
          active2.style.background='#ffffff';
          var active3=document.getElementById('active3');
          active3.style.background='#ffffff';
          var active4=document.getElementById('active4');
          active4.style.background='#ffffff';
          var activ5=document.getElementById('active5');
          activ5.style.background='#ffffff';
          break;
        case 2:
            var html1=document.getElementById('container_presentacion');
            html1.style.display='none';
            var html2=document.getElementById("container_politica_editorial");
            html2.style.display="none";
            var html3=document.getElementById('container_proceso_editorial');
            html3.style.display='none';
            var html4=document.getElementById('container_historia');
            html4.style.display='block';
            var html5=document.getElementById('container_equipo');
            html5.style.display='none';

            var active1=document.getElementById('active1');
            active1.style.background='#ffffff';
            var active2=document.getElementById('active2');
            active2.style.background='#d8cea3';
            var active3=document.getElementById('active3');
            active3.style.background='#ffffff';
            var active4=document.getElementById('active4');
            active4.style.background='#ffffff';
            var activ5=document.getElementById('active5');
            activ5.style.background='#ffffff';
          break;
        case 3:
            var html1=document.getElementById('container_presentacion');
            html1.style.display='none';
            var html2=document.getElementById("container_politica_editorial");
            html2.style.display="block";
            var html3=document.getElementById('container_proceso_editorial');
            html3.style.display='none';
            var html4=document.getElementById('container_historia');
            html4.style.display='none';
            var html5=document.getElementById('container_equipo');
            html5.style.display='none';

            var active1=document.getElementById('active1');
            active1.style.background='#ffffff';
            var active2=document.getElementById('active2');
            active2.style.background='#ffffff';
            var active3=document.getElementById('active3');
            active3.style.background='#d8cea3';
            var active4=document.getElementById('active4');
            active4.style.background='#ffffff';
            var activ5=document.getElementById('active5');
            activ5.style.background='#ffffff';
          break;
        case 4:
            var html1=document.getElementById('container_presentacion');
            html1.style.display='none';
            var html2=document.getElementById("container_politica_editorial");
            html2.style.display="none";
            var html3=document.getElementById('container_proceso_editorial');
            html3.style.display='block';
            var html4=document.getElementById('container_historia');
            html4.style.display='none';
            var html5=document.getElementById('container_equipo');
            html5.style.display='none';

            var active1=document.getElementById('active1');
            active1.style.background='#ffffff';
            var active2=document.getElementById('active2');
            active2.style.background='#ffffff';
            var active3=document.getElementById('active3');
            active3.style.background='#ffffff';
            var active4=document.getElementById('active4');
            active4.style.background='#d8cea3';
            var activ5=document.getElementById('active5');
            activ5.style.background='#ffffff';
          break;
        case 5:
            var html1=document.getElementById('container_presentacion');
            html1.style.display='none';
            var html2=document.getElementById("container_politica_editorial");
            html2.style.display="none";
            var html3=document.getElementById('container_proceso_editorial');
            html3.style.display='none';
            var html4=document.getElementById('container_historia');
            html4.style.display='none';
            var html5=document.getElementById('container_equipo');
            html5.style.display='block';

            var active1=document.getElementById('active1');
            active1.style.background='#ffffff';
            var active2=document.getElementById('active2');
            active2.style.background='#ffffff';
            var active3=document.getElementById('active3');
            active3.style.background='#ffffff';
            var active4=document.getElementById('active4');
            active4.style.background='#ffffff';
            var activ5=document.getElementById('active5');
            activ5.style.background='#d8cea3';
          break;
      }
}
