/* PROJECT: Primary English App
  VERSION: 2.0 (Data-Driven Architecture)
  DATE: 2025-11-29
*/

const appData = {
  "meta": {
    "version": "2.0",
    "appName": "Primary English Grade 3"
  },

  "characters": {
    "amy": { 
      "name": "Amy", 
      "avatar": "avatar-amy.jpg", 
      "colorTheme": "bg-Amy" 
    },
    "sam": { 
      "name": "Sam", 
      "avatar": "avatar-sam.jpg", 
      "colorTheme": "bg-Sam" 
    },
    "daming": { 
      "name": "Daming", 
      "avatar": "avatar-daming.jpg", 
      "colorTheme": "bg-Daming" 
    },
    "lingling": { 
      "name": "Lingling", 
      "avatar": "avatar-lingling.jpg", 
      "colorTheme": "bg-Lingling" 
    },
    "bobo": { 
      "name": "Bobo", 
      "avatar": "avatar-bobo.jpg", 
      "colorTheme": "bg-Bobo" 
    }
  },

  "lessons": [
    {
      "id": "lesson_01",
      "title": "Module 1: How many ropes?",
      "textbookImage": "p44.jpg",
      
      // v2.0 核心特性：配置谁在右边（主角阵营）
      "rightSideRoles": ["daming"], 

      "keywords": ["Chinese", "knot", "ropes", "Six", "Twelve", "one", "amazing", "beautiful", "rope", "make", "Let me", "great"],
      "dialogues": [
        { "scene": "Scene 1", "speakerId": "amy", "text": "Wow! What is it?", "audio": ["Amy-1-What.mp3"] },
        { "speakerId": "daming", "text": "This is a Chinese knot.", "audio": ["Daming-1-Knot.mp3"] },
        { "speakerId": "sam", "text": "It's beautiful!", "audio": ["Sam-1-Beautiful.mp3"] },
        { "scene": "Scene 2", "speakerId": "daming", "text": "Guess! How many ropes?", "audio": ["Daming-2-Guess.mp3"] },
        { "scene": "Scene 3", "speakerId": "sam", "text": "Six?", "audio": ["Sam-2-Six.mp3"] },
        { "speakerId": "amy", "text": "Twelve?", "audio": ["Amy-2-Twelve.mp3"] },
        { "speakerId": "daming", "text": "Haha, no.", "audio": ["Daming-3-No.mp3"] },
        { "scene": "Scene 4", "speakerId": "daming", "text": "Look! Only one rope!", "audio": ["Daming-4-Only.mp3"] },
        { "speakerId": "amy", "text": "That's amazing! How do you make it?", "audio": ["Amy-3-Amazing.mp3"] },
        { "scene": "Scene 5", "speakerId": "daming", "text": "Let me show you.", "audio": ["Daming-5-Show.mp3"] },
        { 
          "speakerId": "group_sam_amy", 
          "isGroup": true, 
          "groupMembers": ["amy", "sam"], 
          "displayAs": "Sam & Amy",
          "text": "OK. That's great!", 
          "audio": ["Amy-4-Great.mp3", "Sam-3-Great.mp3"] 
        }
      ]
    },
    {
      "id": "lesson_02",
      "title": "Module 2: Hello Bobo! (Preview)",
      "textbookImage": "coming.jpg",
      
      // 示例：在第二课，Bobo 是主角，站在右边
      "rightSideRoles": ["bobo"], 
      
      "keywords": ["Robot", "Hello"],
      "dialogues": [
        { 
          "scene": "Scene 1", 
          "speakerId": "sam", 
          "text": "Look! A robot!", 
          "audio": [] // 暂无音频
        },
        { 
          "speakerId": "bobo", 
          "text": "Hello! I am Bobo.", 
          "audio": [] 
        }
      ]
    }
  ]
};