export const cards = () => {
  
    return (
      `
      <div class="homepage">
        <h2>Welcome to Client-Bank.Below you can fill in the details of your new card to register with the bank</h2>
        <div class="card">
          <h2>Card 1</h2>
          <p>Fill in your card details below:</p>
          <form>
            <label for="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" />
            <label for="expirationYear">Expiration Year:</label>
            <input type="text" id="expirationYear" name="expirationYear" placeholder="YY" />
            <label for="securityCode">Security Code:</label>
            <input type="text" id="securityCode" name="securityCode" placeholder="123" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div class="card">
          <h2>Card 2</h2>
          <p>Fill in your card details below:</p>
          <form>
            <label for="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" placeholder="9876 5432 1098 7654" />
            <label for="expirationYear">Expiration Year:</label>
            <input type="text" id="expirationYear" name="expirationYear" placeholder="YY" />
            <label for="securityCode">Security Code:</label>
            <input type="text" id="securityCode" name="securityCode" placeholder="456" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div class="card">
          <h2>Card 3</h2>
          <p>Fill in your card details below:</p>
          <form>
            <label for="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" placeholder="5678 1234 7890 1234" />
            <label for="expirationYear">Expiration Year:</label>
            <input type="text" id="expirationYear" name="expirationYear" placeholder="YY" />
            <label for="securityCode">Security Code:</label>
            <input type="text" id="securityCode" name="securityCode" placeholder="789" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      `
    );
  };
  
  