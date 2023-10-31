export default () => ({ //default 를 쓰는 이유는 변수값으로 값을 받기 위해서이다
  // DATABASE_HOST 나 이런것들은 일종에 변수라서 마음대로 지정해도 된다 
  DATABASE_HOST: process.env.DATABASE_HOST, // env파일에서 프로세스(process) 해서 값을 가져온다 
  DATABASE_PORT: parseInt(process.env.DATABASE_PORT) || 3306,// 포트값은 인트형이라서 parseInt를 쓰고 값을 가져옴 || 3306는 env파일이 혹여나 삭제되거나 했을때 이 값으로 서버를 시작해달라는 일종의 예외처리
  DATABASE_USERNAME: process.env.DATABASE_USERNAME,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_SCHEMA: process.env.DATABASE_SCHEMA
})