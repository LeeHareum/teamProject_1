import React from 'react';

const headerStyles = {
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 20px',
    padding: '10px 0',
    borderBottom: '1px solid rgb(141, 135, 135)',
  },
  icon: {
    /* 아이콘 스타일링 */
  },
  logo: {
    maxWidth: '100px',
    height: 'auto',
  },
  empty: {
    width: '100px',
    height: 'auto',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '15px 20px',
    paddingBottom: '10px',
    borderBottom: 'thick double #020d11',
  },
  categories: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#005587',
    display: 'flex',
  },
  headerLeftRight: {
    color: 'rgb(199, 50, 50)',
    cursor: 'pointer',
  },
  category: {
    padding: '8px',
    color: 'rgb(218, 97, 97)',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#005587',
  },
  categoryHover: {
    backgroundColor: '#003366',
  },
};

function Header() {
  return (
    <header>
      <div style={headerStyles.topContainer}>
        <div style={headerStyles.icon}>Icon</div>
        <img src="logo.png" alt="Logo" style={headerStyles.logo} />
        <div style={headerStyles.empty}></div>
      </div>
      <div style={headerStyles.container}>
        <div style={headerStyles.headerLeftRight}>Jan 01, 2024</div>
        <div style={headerStyles.categories}>
          <div style={headerStyles.category}>U.S.</div>
          <div style={headerStyles.category}>World</div>
          <div style={headerStyles.category}>Business</div>
          <div style={headerStyles.category}>Arts</div>
          <div style={headerStyles.category}>Lifestyle</div>
        </div>
        <div style={headerStyles.headerLeftRight}>Login</div>
      </div>
    </header>
  );
}

export default Header;
/////////////////////////////////////////////////
// //
// 사용 예시
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Header from './Header'; // 프로젝트 구조에 맞게 경로를 조정하십시오

// function App() {
//   // 나머지 애플리케이션 컴포넌트와 로직을 이곳에 정의합니다.
//   // App 컴포넌트 내에서 다른 컴포넌트를 포함시킬 수 있습니다.
//   return (
//     <div>
//       <Header />
//       {/* 다른 컴포넌트를 이곳에서 렌더링합니다. */}
//     </div>
//   );
// }

// // root 요소 내에서 App 컴포넌트를 렌더링합니다.
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
