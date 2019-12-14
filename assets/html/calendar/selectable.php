<!DOCTYPE html>
<html>
<head>
<?php
$db_host="localhost";
$db_nombre="calendario";
$db_usuario="root";
$db_contra="fast089609";

$conexion=mysqli_connect($db_host,$db_usuario,$db_contra);
if (mysqli_connect_errno()){
echo "fallo al conectar con la base de datos";
exit();
}
mysqli_select_db($conexion, $db_nombre) or die ("no se encuantra la BBDD");
mysqli_set_charset($conexion, "utf8");
$consulta="select * from cal";
$resultado=mysqli_query($conexion,$consulta);?>
<meta charset='utf-8' />
<link href='packages/core/main.css' rel='stylesheet' />
<link href='packages/daygrid/main.css' rel='stylesheet' />
<link href='packages/timegrid/main.css' rel='stylesheet' />
<script src='packages/core/main.js'></script>
<script src='packages/interaction/main.js'></script>
<script src='packages/daygrid/main.js'></script>
<script src='packages/timegrid/main.js'></script>
<script>

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      defaultDate: '2019-08-12',
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectMirror: true,
      select: function(arg) {
        var title = prompt('Event Title:');
        if (title) {
          calendar.addEvent({
            title: title,
            start: arg.start,
            end: arg.end,
            allDay: arg.allDay
          })
        }
        calendar.unselect()
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
<?php while(($fila=mysqli_fetch_row($resultado))==true){
if($fila[0]!=""){?> 
 { title: '<?php echo $fila[0]; ?>',<?php } 
if($fila[1]!=""){?>
   start: '<?php echo $fila[1]; ?>',<?php } 
if($fila[2]!=""){?>
 end: '<?php echo $fila[2]; ?>',<?php } 
if($fila[3]!=""){?>
url: '<?php echo $fila[3]; ?>'<?php } ?>
 },
<?php
}
mysqli_close($conexion);//cierra base de datos
?>
      ]
    });

    calendar.render();
  });

</script>
<style>

  body {
    margin: 40px 10px;
    padding: 0;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    font-size: 14px;
  }

  #calendar {
    max-width: 900px;
    margin: 0 auto;
  }

</style>
</head>
<body>

  <div id='calendar'></div>

</body>
</html>
