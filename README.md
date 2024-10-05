# Birthday Gift Recommendation System

## Table of Contents
- [Overview](#overview)
- [Purpose](#purpose)
- [System Requirements](#system-requirements)
- [How to Run the Program](#how-to-run-the-program)
- [User Interaction](#user-interaction)
- [Code Logic](#code-logic)
- [JavaScript Functions](#javascript-functions)
- [Formulas Used](#formulas-used)

## Overview
The Birthday Gift Recommendation System is a web-based application designed to help users select suitable gift combinations based on a specified budget and number of gifts. Users can enter various gift items with their prices and receive recommendations for gift combinations that fall within their budget constraints.

## Purpose
The purpose of this application is to simplify the gift selection process for birthdays. It enables users to input multiple gift options and receive tailored recommendations that fit within their budget, ensuring a thoughtful selection for special occasions.

## System Requirements
- A modern web browser (Google Chrome, Firefox, Safari, etc.)
- No additional installations are required as it runs locally in the browser.

## How to Run the Program
1. **Open the HTML File:**
   - Navigate to the directory containing the files and open `GiftRecommendation.html` in your preferred web browser.

2. **Start Using the Application:**
   - The application should load, displaying the user interface for gift recommendations.

## User Interaction
1. **Input Gift Details:**
   - Enter the name and price of each gift in the provided input fields.
   - Click the "+" button to add the gift to the list.

2. **Set Recommendation Criteria:**
   - Enter the number of gifts you would like to receive recommendations for.
   - Specify the budget you wish to adhere to when selecting gifts.

3. **Get Recommendations:**
   - Click the "Recommend Gifts" button to generate gift combinations within your budget.
   - The recommended gift combinations will be displayed below the button.

## Code Logic
- The application uses JavaScript to manage user inputs, validate them, and compute gift combinations.
- Upon clicking the "Recommend Gifts" button, the system evaluates all possible combinations of the gift items added by the user, checking if they fall within the specified budget.
- The results are dynamically displayed in an unordered list, showing all valid combinations of gifts that meet the criteria.

## JavaScript Functions
- **`addGift()`**: 
  - Collects the gift name and price from input fields and stores them in an array if valid.
  - Notifies the user when a gift is successfully added or prompts for missing information.

- **`generateRecommendations()`**: 
  - Evaluates the user's criteria (number of gifts and budget).
  - Generates all possible two-gift combinations from the entered gifts.
  - Calculates the total price of each combination and checks if it is within the budget.
  - Displays valid combinations or a message indicating no valid combinations were found.

## Formulas Used
- **Combination Calculation**: 
  - The program generates combinations using a nested loop approach, specifically targeting pairs (2-combinations) of gift items.

- **Cost Validation**:
  - For each combination of gifts, the total cost is calculated as follows:
  
  \[
  \text{Total Cost} = \text{Gift1 Price} + \text{Gift2 Price}
  \]

  - The combination is valid if:
  
  \[
  \text{Total Cost} \leq \text{Budget}
  \]
  