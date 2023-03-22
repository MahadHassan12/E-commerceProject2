import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethod";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([])
  const [perc, setPerc] = useState([0])

  useEffect(() => {
    const getIncome = async () => {
    try{
      const res = await userRequest.get('http://localhost:5000/api/orders/income')
      setIncome(res.data)
      setPerc((res.data[1].total*100) / res.data[0].total - 100);
    }catch{}
  };
  getIncome()
  }, [])

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Inkomst</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{income[1]?.total}kr</span>
          <span className="featuredMoneyRate">
            %{perc} <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Jämfört med förra månaden</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Försäljning</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4,415 kr</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Jämfört med förra månaden</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Kostnad</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,225 kr</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Jämfört med förra månaden</span>
      </div>
    </div>
  );
}
