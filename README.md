# 🎂 Suzi's Birthday Quiz Website

A mobile-friendly birthday treasure hunt quiz website.

## How It Works

1. **Homepage**: Shows a birthday message with a button to start the quiz
2. **Questions**: 4 multiple choice questions
3. **Wrong Answer**: Shows a funny "oops" page with a "Try Again" button
4. **Correct Answer**: Shows a location hint and requires a secret code to proceed
5. **Final Page**: Congratulations message after completing all 4 questions

## Customization

Edit `script.js` to customize:

### Questions Answers
```javascript
const quizConfig = {
    answers: {
        1: 'b',  // Question 1: a=2018, b=2019, c=2020, d=2021
        2: 'a',  // Question 2: a=Pizza, b=Sushi, c=Pasta, d=Burgers
        3: 'c',  // Question 3: a=The Notebook, b=Titanic, c=Love Actually, d=The Princess Bride
        4: 'd'   // Question 4: a=Perfect, b=Thinking Out Loud, c=All of Me, d=A Thousand Years
    },
    codes: {
        1: 'BIRTHDAY1',
        2: 'SURPRISE2',
        3: 'ALMOST3',
        4: 'FINAL4'
    }
};
```

### Questions & Options
Edit `index.html` to change:
- Question text (`.question-text`)
- Answer options (buttons in `.options`)
- Location hints (`.location-hint`)
- Birthday messages

## Hosting on GitHub Pages

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Birthday quiz website"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (in the left sidebar)
   - Under "Source", select **Deploy from a branch**
   - Select **main** branch and **/ (root)** folder
   - Click **Save**

3. **Access your site**:
   - Wait 1-2 minutes for deployment
   - Your site will be live at: `https://edwarddavis2.github.io/SuzisBirthday/`

## Files

- `index.html` - Main HTML structure with all pages
- `styles.css` - Mobile-friendly responsive styles
- `script.js` - Quiz logic and configuration

## License

Made with ❤️ for Suzi's birthday!
