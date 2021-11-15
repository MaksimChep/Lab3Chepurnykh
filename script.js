window.onload =setimage;
        
        var rlt = ["one.png", "two.png", "three.png","four.png"];
        function setimage(){
            [].forEach.call( document.getElementsByTagName( 'img' ), function ( img, i ) {
            img.src = rlt[i]; img.i = i;
            });
        }
        function onClickUp(i){
            if(i == 0)
            {
                window.alert("Данный элемент нельзя перенести выше!")
                return
            }
            else{
                var buf = rlt[i - 1]
                rlt[i - 1] = rlt[i]
                rlt[i] = buf
                setimage()
            }
        }
        function onClickDown(i){
            if(i == rlt.length - 1)
            {
                window.alert("Данный элемент нельзя перенести ниже!")
                return
            }
            else{
                var buf = rlt[i]
                rlt[i] = rlt[i + 1]
                rlt[i + 1] = buf
                setimage()
            }
        }
        function setSize(imgid){
            var width = window.prompt('Введите ширину: ','')
            var height = window.prompt('Введите высоту: ','')
            var image = document.getElementById(imgid)
            image.width = width
            image.height = height
        }