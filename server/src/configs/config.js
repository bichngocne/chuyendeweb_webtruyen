import { createConnection } from 'mysql2';

const connect = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "webtruyen"
});

connect.connect(function(err) {
  if (err) {
    console.error('Connect database unsuccessfull: ' + err.message);
    process.exit(1); // Kết thúc ứng dụng nếu không thể kết nối cơ sở dữ liệu
  }
  console.log("Connect database successfull!");
});

connect.end();

export default connect;
