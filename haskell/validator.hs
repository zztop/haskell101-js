module Validator where

toDigit :: Int -> [Int]
toDigit x = map (read . (:[])) (show x)

doubleXer :: [Int] -> [Int]
doubleXer xs = [if mod y 2 == 0 then 2 * x else x  | (x,y) <- zip xs [1..length xs] ]

reducer :: [Int] ->[Int]
reducer xs = [if x>=10 then adder (toDigit x) else x | x<-xs ]

adder :: [Int] ->Int
adder []     =  0
adder (x:xs) =  x + adder xs



validate :: Int -> Bool
validate x =  adder (reducer (doubleXer (reverse (toDigit x)))) `mod`  10 == 0




-- validate x = if length x /= 16  then error "should be 16 digits"
-- 			else
-- 			 reverse (toDigit x)