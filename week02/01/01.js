
<Number> = "0" | "1" | "2" | ..... | "9"

<DecimalNumber> = "0" | (("1" | "2" | ..... | "9") <Number>* )

<PrimaryExpression> = <DecimalNumber> |
    "(" <LogicalExpression> ")"

<MultiplicativeExpression> = <PrimaryExpression> | 
    <MultiplicativeExpression> "*" <PrimaryExpression>| 
    <MultiplicativeExpression> "/" <PrimaryExpression>

<AdditiveExpression> = <MultiplicativeExpression> | 
    <AdditiveExpression> "+" <MultiplicativeExpression>| 
    <AdditiveExpression> "-" <MultiplicativeExpression>

<LogicalExpression> = <AdditiveExpression> | 
    <LogicalExpression> "||" <AdditiveExpression> | 
    <LogicalExpression> "&&" <AdditiveExpression></AdditiveExpression>