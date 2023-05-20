let info = document.getElementsByTagName('input');
let btn = document.getElementsByTagName('button');
let tList = document.getElementById('list');

let arrayInfo = [];
let arrayEmail = [];
let arrayPhone = [];
 
btn[0].addEventListener('click', function () {
    // lay gia tri trong input
    let yName = info[0].value;
    let yEmail = info[1].value;
    let yPhone = info[2].value;


    // kiem tra co ton tai mail hay sdt chua
    let eemail = document.getElementsByClassName("mail");
    let pphone = document.getElementsByClassName("phone"); 
    let checkE = kiemTraTrung(eemail, yEmail);
    let checkP = kiemTraTrung(pphone, yPhone);


    if ( yName == '' || yEmail == '' || yPhone == '') {
        alert('Vui lòng nhập đủ thông tin');
    } else if (checkE == false) {
        alert('Email bị trùng');
    } else if (checkP == false) {
        alert('Số điện thoại bị trùng');
    } else {
        // them html vao .list
        let tTr = document.createElement('tr'); // dung document.createElement mới add dc vào .list
        tTr.style.textAlign = 'center';
        tTr.innerHTML += `
                    <td class="soThuTu"></td>
                    <td>${yName}</td>
                    <td class="mail">${yEmail}</td>
                    <td class="phone">${yPhone}</td>
                `;
        
        // in ra man hinh 
        tList.appendChild(tTr);
        // xóa thông tin vừa nhập
        info[0].value = '';
        info[1].value = '';
        info[2].value = '';

        // lưu vào mảng để xử lý cập nhật
        arrayInfo.push(tTr);
       
        // double click xoa
        tTr.addEventListener('dblclick', function () {
            let a = confirm("Bạn có chắc muốn xóa không?");
            if (a) {
                this.remove();
                let b = arrayInfo.indexOf(this);
                arrayInfo.splice(b, 1);
                // sau khi xóa cập nhật lại stt 
                capNhatStt();
            }
        }) 
        // cập nhật stt
        capNhatStt();

    }

})

// hàm cập nhật stt
function capNhatStt(){
    let stt = document.getElementsByClassName("soThuTu");    
    for( let i in arrayInfo){
        let a = parseInt(i) + 1;
        stt[i].innerHTML = `${a}`;
        
    }
}
// hàm check thông tin bị trùng
function kiemTraTrung(MangLuu,bienKiemTra){
    let kt = true;
    for(let thongTin of MangLuu){
        if (bienKiemTra == thongTin.innerHTML){
            kt = false;
        }
    }
    return kt;
}


    // let checkE = true;
    // let checkP = true;

    // for(let iEmail of eemail){
    //     if (yEmail == iEmail.innerHTML){
    //         checkE = false;
    //     } 

    // }
    // for(let iPhone of pphone){
    //     if (yPhone == iPhone.innerHTML){
    //         checkP = false;
    //     } 
    // }

    // function kiemTraTrung(MangLuu,bienKiemTra){
    //     for(let thongTin of MangLuu){
    //         if (bienKiemTra == thongTin.innerHTML){
    //             return false;
    //         } else {
    //             return true;
    //         }
    //     }
    // }
    // console.log(checkE);
    // console.log(checkP);

    // tTr.classList.add("delete"); // thêm class vào element