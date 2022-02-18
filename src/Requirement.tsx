import template from "./assets/template.png";

const Requirement = () => {
  return (
    <div
      style={{
        textAlign: "left",
      }}
    >
      <h1>森淨科技前端 React 試題</h1>
      <hr />
      <div>
        題目分為兩個部分，分別為『版面配置』以及『功能需求』，請試著滿足敘述的內容。
      </div>

      <h2>注意事項</h2>
      <ul>
        <li>
          <b>提交方式</b> 在 CodeSandbox 上 Fork
          一個自己的分支，開發後提交分支連結
          <br />
        </li>
        <li>可以使用任何開源套件來滿足以下需求</li>
        <li>可以使用 JavaScript 或是 TypeScript 完成</li>
        <li>
          圖片僅供參考，配色或版面請自由設計，但需要滿足圖片中的敘述（如：寬、高、功能）
        </li>
      </ul>

      <h2>版面配置</h2>
      <ul style={{ listStyle: "numeric" }}>
        <li>
          版面配置符合附圖
          <br />
          (包含 Header, Aside, Main Content, Offcanvas)
        </li>
        <li>
          Offcanvas 需要展開及隱藏的功能，並且 Main Content 會跟著改變寬度
        </li>
        <li>
          在 Main Content 顯示 <code>mockData</code> 資料
        </li>
      </ul>

      <h2>功能需求</h2>
      <ul style={{ listStyle: "numeric" }}>
        <li>單擊 Main Content 資料列選取，並將該列反白（更換背景色）</li>
        <li>雙擊 Main Content 資料列，若 Offcanvas 為隱藏的狀態，請將其展開</li>
        <li>資料狀態為 false 的狀態下無法選取</li>
        <li>選取資料後需要在 Offcanvas 中顯示選取的名稱以及內容圖片</li>
        <li>
          若 Offcanvas
          為展開的狀態並且沒有任何資料列是選中的狀態，請顯示目前所有資料的數量
        </li>
      </ul>
      <img
        src={template}
        alt="description"
        style={{
          height: "auto",
          maxWidth: "100%",
          border: "1px solid black",
        }}
      />
    </div>
  );
};

export default Requirement;
