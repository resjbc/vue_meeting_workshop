<template>
 <div class="register container">
     <div class="row">
         <div class="col-md-3"></div>
         <div class="col-md-6">
             <img src="/img/logo.svg" alt="Logo" class="img-logo">
                <div class="card">
                    <h1 class="card-header">
                        REGISTER
                    </h1>
                 <div class="card-body">
                     <form action="">
                         <div class="form-group">
                             <label for="">ชื่อผู้ใช้งาน</label>
                             <input type="text" class="form-control">
                         </div>

                         <div class="form-group">
                             <label for="">รหัสผ่าน</label>
                             <input type="password" class="form-control">
                         </div>

                         <div class="form-group">
                             <label for="">ชื่อ</label>
                             <input type="text" class="form-control">
                         </div>

                         <div class="form-group">
                             <label for="">นามสกุล</label>
                             <input type="text" class="form-control">
                         </div>
                    
                         <div class="form-group buttons">
                             <button type="submit" class="btn btn-info btn-block">
                                 ลงทะเบียน
                             </button>

                             <button type="button" class="btn btn-secondary btn-block">
                                 เข้าสู่ระบบ
                             </button>
                         </div>
                     </form>
                </div>
        </div>
         </div>
         <div class="col-md-3"></div>
     </div>
 </div>
</template>

<script>
export default {};
</script>

<style scoped>
.img-logo {
  width: 80%;
  display: block;
  margin: auto;
  margin-top: 10%;
  margin-bottom: 30px;
}
h1 {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 5px;
}

.card {
   margin-bottom: 15%; 
}

.card-body{
    padding-left: 15%;
    padding-right: 15%;
}
.buttons {
    margin-top: 30px;
    margin-bottom: 50px; 
}

.buttons .btn-secondary {
     margin-top: 15px;
}
</style>

