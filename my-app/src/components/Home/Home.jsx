import "./Home.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Component } from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="wlc py-3">
        <h1>Welcome to ,</h1>
        <h3 className="heading">
          <span>THE</span> <span> SPARKS</span> <span> FOUNDATION</span>
          <span> BANK</span>
        </h3>
      </div>
      <div className="bank-info">
        <p className="info-lines">
          <b>Bank</b> , an institution that deals in money and its substitutes
          and provides other money-related services. In its role as a financial
          intermediary, a bank accepts deposits and makes loans. It derives a
          profit from the difference between the costs (including interest
          payments) of attracting and servicing deposits and the income it
          receives through interest charged to borrowers or earned through
          securities. Many banks provide related services such as financial
          management and products such as mutual funds and credit cards.
          <br />{" "}
          <b>
            <u>Principles of banking : </u>
          </b>{" "}
          The central practice of banking consists of borrowing and lending. As
          in other businesses, operations must be based on capital, but banks
          employ comparatively little of their own capital in relation to the
          total volume of their transactions. Instead banks use the funds
          obtained through deposits and, as a precaution, maintain capital and
          reserve accounts to protect against losses on their loans and
          investments and to provide for unanticipated cash withdrawals.
          <br /> <b>Types of Banks Accounts: </b>{" "}
          <ul>
            <li>Saving Account</li>
            <li>Current Account</li>
            <li>Fixed Deposit Account</li>
            <li>Salary Account</li>
            <li>Recurring Deposit Account</li>
            <li>NRI Account</li>
          </ul>
        </p>
      </div>
      <div className="home-buttons my-5">
        <Button className="px-3 py-2 btn">
          <Link to="/customers" className="nav-link ">
            see all customers
          </Link>
        </Button>
        <Button className="mx-5 px-3 py-2 btn">
          <Link to="/transactions" className="nav-link ">
            transfer money
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
