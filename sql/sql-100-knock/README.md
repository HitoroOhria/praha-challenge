# 1996年に3回以上注文した（Ordersが3つ以上紐づいている）CustomerのIDと、注文回数を取得してみてください

```sql
SELECT c.CustomerID, COUNT(o.OrderID) as OrderCount
FROM Customers c
LEFT JOIN Orders o
 ON o.CustomerID = c.CustomerID
WHERE o.OrderDate >= CAST('1996/1/1' AS DATE)
GROUP BY c.CustomerID
HAVING COUNT(o.OrderID) >= 3
;
```