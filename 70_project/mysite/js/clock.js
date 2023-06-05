const yArea = document.querySelector('.yy');
        const oArea = document.querySelector('.mm');
        const dArea = document.querySelector('.dd');
        const wArea = document.querySelector('.we');
        const hArea = document.querySelector('.hh');
        const mArea = document.querySelector('.mi');
        const sArea = document.querySelector('.ss');

        setInterval(timer, 1000)

        function timer() {
            let d = new Date();
            yArea.innerHTML = d.getFullYear() + '년';
            oArea.innerHTML = d.getMonth() + 1 + '월';
            dArea.innerHTML = d.getDate() + '일';
            
            
                
            let wArea = d.getDay();

            if (week == 0) {
                week = '일요일';
            }
            else if (week === 1) {
                week = '월요일';
            }
            else if (week === 2) {
                week = '화요일';
            }
            else if (week === 3) {
                week = '수요일';
            }
            else if (week === 4) {
                week = '목요일';
            }
            else if (week === 5) {
                week = '금요일';
            }
            else {
                week = '토요일';
            }

            // 시(hh)
            // 오전과 오후를 구분하여 12시간제로 표시하기. 두자리 수로 표현하기
            // 예) 오전 05시
            let hArea = d.getHours();
            if (hh >= 13) {
                hh = hh - 12;
                document.write('오전' + hh + '시', '<br>')
            } else {
                document.write('오후' + hh + '시', '<br>')
            }
            // 분(mm)
            // 00 ~ 09, 10 ~ 60
            let mArea = d.getMinutes()
            let sArea = d.getSeconds()
            if (mm < 10 || ss < 10) {
                mm = '0' + mm;
                ss = '0' + ss;
            }
         
            // 초(ss)
            // 01 ~ 09 ~ 10 ~ 60


    



        }