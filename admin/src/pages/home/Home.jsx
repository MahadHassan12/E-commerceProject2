import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethod";

export default function Home() {
  const [userStats, setUserstats] = useState([]);

  const Months = useMemo(() => [
    'Jan',
    'Feb',
    'Mars',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],
  []
  );

  useEffect(() => {
    const getStats = async () => {
      try{
        const res = await userRequest.get('http://localhost:5000/api/users/stats');
        res.data.map((item) => {
          setUserstats(prev => [
            ...prev,
            {name:Months[item._id-1], 'Active användare': item.total}
          ])
        })
      }catch{}
    };
    getStats()
  }, [Months])


  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="Användare Analys" grid dataKey="Active användare"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
