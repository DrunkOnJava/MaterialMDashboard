import React from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  changePercentage: number;
  icon: React.ReactNode;
  bgColor?: string;
}

export const StatCard = ({
  title,
  value,
  changePercentage,
  icon,
  bgColor = "bg-light-themeprimarylight-blue",
}: StatCardProps): JSX.Element => {
  const isPositive = changePercentage >= 0;

  return (
    <Card className="rounded-xl shadow-light-theme-shadow-medium">
      <CardContent className="flex p-6 items-start">
        <div className="flex-1">
          <p className="text-blackblack-60 text-sm font-medium mb-2">{title}</p>
          <p className="text-blackblack-100 text-2xl font-semibold">{value}</p>
          <div className="flex items-center mt-2">
            <div className={`rounded-full p-1 mr-1 ${isPositive ? 'bg-actionsuccess-light' : 'bg-actionwarning-light'}`}>
              {isPositive ? (
                <ArrowUp className="w-3 h-3 text-actionsuccess" />
              ) : (
                <ArrowDown className="w-3 h-3 text-actionwarning" />
              )}
            </div>
            <span className={`text-xs font-medium ${isPositive ? 'text-actionsuccess' : 'text-actionwarning'}`}>
              {Math.abs(changePercentage)}% from last period
            </span>
          </div>
        </div>
        <div className={`${bgColor} p-3 rounded-lg`}>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};