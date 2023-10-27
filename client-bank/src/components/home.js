export const home = () => {
  return `
    <div class="home">
      <h1>Welcome to Client-Bank</h1>
      <div class="main">
        <div class="main-content">
          <p>
            Discover a world of financial opportunities with Client-Bank. Our bank offers a wide range of services to meet your financial needs.
          </p>
          <div class="service-card">
            <img src="./public/img/savings.png" alt="Savings Account" />
            <h3>Savings Account</h3>
            <p>Start saving with our high-yield savings accounts and watch your money grow.</p>
          </div>
          
          <div class="service-card">
            <img src="./public/img/loans.png" alt="Loans" />
            <h3>Loans</h3>
            <p>Get access to various loan options with competitive interest rates for your financial needs.</p>
          </div>
          <div class="service-card">
            <img src="./public/img/investment.jpeg" alt="Investment" />
            <h3>Investment</h3>
            <p>Explore investment opportunities and grow your wealth with our expert financial advisors.</p>
          </div>
          <div class="service-card">
            <img src="./public/img/cards.png" alt="Bank Cards" />
            <h3>Bank Cards</h3>
            <p>Choose from a wide range of debit and credit cards that suit your lifestyle.</p>
          </div>
        </div>
      </div>
      <footer class="footer">
        Copyright: &copy; Client-Bank &trade; Kyiv, 2023
      </footer>
    </div>
  `;
};
