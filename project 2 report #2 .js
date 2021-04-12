class Transaction 
{
    constructor(date, amount, reason) 
    {
        this.date = date;
        this.amount = amount;
        this.reason = reason;
    }
}
class PercenteOFTransaction 
{
    constructor(reason, percentage) 
    {
        this.reason = reason;
        this.percentage = percentage;
    }
}

class MonthlyReport 
{
    constructor(month, TotalAmount, Percentage) 
    {
        this.month = month;
        this.TotalAmount = TotalAmount;
        this.Percentage = Percentage;
    }
}

function reason(OAmount) 
{
    let ReasonC = new Map();

    return {
        cache: reason => 
        {
            if (ReasonC.has(reason)) 
            {
                ReasonC.set(reason, ReasonC.get(reason) + 1);
            } else {
                ReasonC.set(reason, 1);
            }
        },
        reduce: () => 
        {
            let values = [];

            ReasonC.forEach((count, reason) => 
            {
                values.push(new PercenteOFTransaction(reason, (count / OAmount).toFixed(2)));
            });

            return values;
        }
    }
}

function Percentages(monthlyTransactions) 
{
    let cache = reason(monthlyTransactions.length);

    for (let i = 0; i < monthlyTransactions.length; i++) 
    {
        cache.cache(monthlyTransactions[i].reason);
    }

    return cache.reduce();
}

function MOnthlyReport(Transactionspermonth) 
{
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    const transactions = Transactionspermonth.map(transaction => 
    {
        return new Transaction(new Date(transaction.date), transaction.amount, transaction.reason);
    });

    let monthlyReports=[];

    for (let month = 0; month < months.length; month++) 
    {
        let monthlyTransactions = transactions.filter(transaction => transaction.date.getMonth() == month);

        let reasonPercentages = Percentages(monthlyTransactions);
        
        let monthlyAmmountSum = monthlyTransactions.reduce((sum, transaction) => sum + transaction.amount, 0).toFixed(2);

        monthlyReports.push(new MonthlyReport(months[month], monthlyAmmountSum, reasonPercentages));
    }

    return { "months": monthlyReports };
}
let reportCache = null;

async function buildTransactionReportTable() {
    if (reportCache == null) {
        reportCache = await retrieveTransactionReportData();
    }

    reportCache.months.forEach(buildMonthlyReportTableDiv);
}

function resetMonthlyReportsContainer() {
    document.getElementById("monthly-reports-container").innerHTML = "";
} 