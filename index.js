<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>FLASK</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
          
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        
    </head>
    <body>
        <div class="flex-center position-ref full-height">
        
             
            <div class="content">
                <button id="triggerData" >GET DATA</button>
                <table id="dataTable">
                    <thead>
                    <th>Name</th>
                    <th>Email</th>
                    </thead>
                    <tbody id="body">
                    </tbody>
                

                </table>
                
            </div>
           
        </div>
    </body>
       <script>
           let resArray=[];
                    $(document).ready(function(){
                        
                        $("#triggerData").click(function(){
                        
                            $.ajax({
                                url:"/users",
                                method:"get",
                                success:function(data){

                                var i, j, chunk = 10;
                                for (i = 0, j = data["users"].length; i < j; i += chunk) {
                                resArray.push(data["users"].slice(i, i + chunk));
                                }
                                var trHTML = '';
                                $('#body').empty();
                                $.each(resArray[0], function (i, item) {
                                    trHTML += '<tr><td>' + item.name + '</td><td>' + item.email + '</td></tr>';
                                });
                                $("#dataTable").append(trHTML);
                                let paginateHtml='';
                            
                                    $.each(resArray, function (i, item) {
                                        paginateHtml += '<button onclick="getNextData('+i+')"> ' + (i+1) + '</button>';
                            
                                });
                               
                                $('#dataTable').append(paginateHtml);
                                        },
                                        error:function(error){
                                            console.log(error)
                                        }
                                    });
                                });       
                    
                                
                    });
                    function getNextData(index){
                        $('#body').empty();
                            var trHTML = '';
                                $.each(resArray[index], function (i, item) {
                                    trHTML += '<tr><td>' + item.name + '</td><td>' + item.email + '</td></tr>';
                                });
                                $("#dataTable").append(trHTML);
                    }
        </script>
</html>
