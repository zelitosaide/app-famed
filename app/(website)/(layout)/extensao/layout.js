export default function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "26%", padding: "30px 20px 20px 120px" }}>
        <div 
          style={{ 
            width: "100%", 
            background: "rgb(23 132 21 / 12%)", 
            height: 400 
          }} 
        />
      </div>
      <div style={{ padding: "30px 120px 30px 0", width: "74%" }}>
        {children}
      </div>
    </div>
  );
}