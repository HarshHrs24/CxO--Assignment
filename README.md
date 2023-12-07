# CxO--Assignment

## Problem Statement
Design a Node.js system to efficiently allocate colored balls into buckets based on their volume, optimizing for maximum bucket utilization and minimum bucket usage.

## Solution Overview
The solution for efficiently placing colored balls into buckets optimizes space utilization and minimizes the number of buckets used. It involves sorting balls by volume in descending order and strategically selecting buckets that maximize filling while minimizing unused space. This dynamic and efficient approach ensures optimal allocation, even in complex scenarios with varied ball sizes and bucket capacities.

## Test Cases
1. **All Balls Fit Perfectly**
   - **Body:** `{"balls": [{"volume": 4, "color": "Red", "count": 2}], "buckets": [{"volume": 8}]}`
   - **Output:** `[ { "totalVolume": 8, "remainingVolume": 0, "balls": [ "Red ball with volume 4", "Red ball with volume 4" ] } ]`
2. **Large Ball, Small Bucket**
   - **Body:** `{"balls": [{"volume": 10, "color": "Green", "count": 1}], "buckets": [{"volume": 5}]}`
   - **Output:** `[ { "totalVolume": 5, "remainingVolume": 5, "balls": [] } ]`
3. **Multiple Colors, Equal Volumes**
   - **Body:** `{"balls": [{"volume": 3, "color": "Blue", "count": 2}, {"volume": 3, "color": "Red", "count": 2}], "buckets": [{"volume": 6}, {"volume": 6}]}`
   - **Output:** `[ { "totalVolume": 6, "remainingVolume": 0, "balls": [ "Blue ball with volume 3", "Blue ball with volume 3" ] }, { "totalVolume": 6, "remainingVolume": 0, "balls": [ "Red ball with volume 3", "Red ball with volume 3" ] } ]`
4. **No Buckets Available**
   - **Body:** `{"balls": [{"volume": 3, "color": "Yellow", "count": 1}], "buckets": []}`
   - **Output:** `[]`

5. **Complex Test Case: Diverse Volumes and Colors**
   - **Body:** `{ "balls": [ {"volume": 8, "color": "Red", "count": 1}, {"volume": 5, "color": "Blue", "count": 2}, {"volume": 6, "color": "Green", "count": 3}, {"volume": 3, "color": "Yellow", "count": 4}, {"volume": 7, "color": "Purple", "count": 1} ], "buckets": [ {"volume": 10}, {"volume": 15}, {"volume": 12}, {"volume": 8}, {"volume": 20} ] }`
   - **Output:** `[ { "totalVolume": 8, "remainingVolume": 0, "balls": [ "Red ball with volume 8" ] }, { "totalVolume": 12, "remainingVolume": 0, "balls": [ "Green ball with volume 6", "Green ball with volume 6" ] }, { "totalVolume": 10, "remainingVolume": 0, "balls": [ "Purple ball with volume 7", "Yellow ball with volume 3" ] }, { "totalVolume": 15, "remainingVolume": 1, "balls": [ "Green ball with volume 6", "Blue ball with volume 5", "Yellow ball with volume 3" ] }, { "totalVolume": 20, "remainingVolume": 9, "balls": [ "Blue ball with volume 5", "Yellow ball with volume 3", "Yellow ball with volume 3" ] } ]`

## Screenshots
## Testcase A:
<img width="700" height="500" alt="Testcase" src="https://github.com/HarshHrs24/CxO--Assignment/assets/107180900/88a687d5-f3b7-4e83-a64f-0bcd87355c58">

## Testcase B:
<img width="700" height="500" alt="Testcase" src="https://github.com/HarshHrs24/CxO--Assignment/assets/107180900/a6f68a71-ae5e-4b94-b3e4-59abc6ca5293">


## Contact Information
Name - [Harsh Soni](sonih8085@gmail.![Uploading Screenshot 2023-12-07 at 11.08.35 PM.png…]()
com) - sonih8085@gmail.com

