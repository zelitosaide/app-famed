export default function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "26%", padding: "30px 20px 20px 120px" }}>
        <div 
          style={{ 
            width: "100%", 
            // background: "rgb(23 132 21 / 12%)", 
            // background: "#1b9a19", 
            height: 400 
          }} 
          className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-300 via-emerald-600 to-lime-500"
        />
      </div>
      <div style={{ padding: "30px 120px 30px 0", width: "74%" }}>
        {children}
      </div>
    </div>
  );
}

