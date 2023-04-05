export default document.body.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wbpack Exercise</title>
    <script src="https://kit.fontawesome.com/3656d24b6d.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;1,300&display=swap" rel="stylesheet">
</head>
<body>
    <header class="header">
            <div class="user-input">
                <div class="my_head inputs">
                    <h1 class="header_one ">Today's To Do</h1>
                <i class="fa-solid fa-rotate"></i>
                </div>
                
            <div>
            <div class="inputs">
                <input type="text" placeholder="Add to your list..." id="txtTitle" class="txtTitle" required>
                <div class="addBook"><i class="fa-solid fa-arrow-left"></i></i></div>
            </div>
            
            </div>
            
        </div>
        <div class="books-list">

        </div>
        <div class="clear inputs"><a>Clear all completed</a> </div>
    </header>
</body>
</html>
    `;
