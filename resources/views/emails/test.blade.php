<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    
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
      align-items: center;
      display: flex;
      justify-content: center;
    }

    .position-ref {
      position: relative;
    }

    .content {
      text-align: center;
    }

    .title {
      font-size: 36px;
      padding: 20px;
    }
    </style>
  </head>
  <body>
    <table>
      <tr>
        <td style="text-align: left; width:120px"></td>
        <th style="text-align: left;"><h3><b>Basic Info</b></h3></th>
      </tr>
      <tr>
        <td style="text-align: left;">Name</td>
        <th style="text-align: left;">{{ $fullName }}</th>
      </tr>
      <tr>
        <td style="text-align: left;">Username</td>
        <th style="text-align: left;">{{ $userName }}</th>
      </tr>
      <tr>
        <td style="text-align: left;">Email</td>
        <th style="text-align: left;">{{ $email }}</th>
      </tr>
      <tr>
        <td style="text-align: left;">Phone number</td>
        <th style="text-align: left;">{{ $phoneNumber }}</th>
      </tr>
      <tr>
        <td style="text-align: left;"></td>
        <th style="text-align: left;"><h3><b>Security Questions</b></h3></th>
      </tr>
      @foreach ($securityQuestions as $key => $securityQuestion)
        <tr >
          <td style="text-align: left;">Question #{{ $key + 1 }}</td>
          <th style="text-align: left;">{{ $securityQuestion->_security_question }}</th>
        </tr>
        <tr >
          <td style="text-align: left;">Answer</td>
          <th style="text-align: left;">{{ $securityQuestion->answer }}</th>
        </tr>
      @endforeach
      
    </table>
  </body>
</html>