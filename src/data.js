export const roadmap = [
  { name: 'Python Programming', icon: '🐍', topics: ['Python setup and syntax','Variables and data types','Operators and expressions','Conditions and loops','Functions and modules','Lists, tuples, sets and dictionaries','File handling','OOP fundamentals','Exception handling','Virtual environments and packages'] },
  { name: 'Maths for Machine Learning', icon: '📐', topics: ['Linear algebra basics','Vectors and matrices','Matrix operations','Calculus fundamentals','Derivatives and gradients','Probability basics','Conditional probability and Bayes theorem','Descriptive statistics'] },
  { name: 'Data Analysis', icon: '📊', topics: ['NumPy arrays','NumPy indexing and operations','Pandas Series and DataFrames','Data cleaning','Missing values and duplicates','Data visualization with Matplotlib','Exploratory data analysis'] },
  { name: 'Machine Learning', icon: '🤖', topics: ['ML workflow and terminology','Supervised vs unsupervised learning','Linear regression','Logistic regression','K-nearest neighbours','Decision trees and random forests','Support vector machines','K-means clustering','Train-test split and cross-validation','Feature engineering','Model evaluation metrics','Hyperparameter tuning'] },
  { name: 'Deep Learning', icon: '🧠', topics: ['Neural network fundamentals','Perceptrons and activation functions','Forward and backpropagation','Gradient descent and optimizers','TensorFlow or PyTorch basics','Convolutional neural networks','Recurrent neural networks','Transfer learning'] },
  { name: 'NLP and Generative AI', icon: '💬', topics: ['Text preprocessing','Tokenization and embeddings','Text classification','Attention mechanism','Transformer architecture','Large language model basics','Prompt engineering','Retrieval-augmented generation'] },
  { name: 'Projects and Deployment', icon: '🚀', topics: ['Build a data analysis project','Build a regression project','Build a classification project','Build an end-to-end ML project','Create a simple model API','Deploy a machine learning application','Git and GitHub portfolio'] },
  { name: 'SQL and Data Engineering', icon: '🗄️', topics: ['Relational database concepts','SQL SELECT, WHERE and ORDER BY','GROUP BY and aggregate functions','Joins and subqueries','Primary and foreign keys','Database normalization','Python database connectivity','ETL pipelines and data validation'] },
  { name: 'Computer Vision', icon: '👁️', topics: ['Image representation and preprocessing','OpenCV fundamentals','Convolution and image filters','CNN image classification','Data augmentation','Transfer learning for vision','Object detection fundamentals','Image segmentation basics'] },
  { name: 'Advanced NLP and LLM Engineering', icon: '🧩', topics: ['Word2Vec and contextual embeddings','Transformer encoder and decoder','Pretraining versus fine-tuning','Hugging Face Transformers','Parameter-efficient fine-tuning (LoRA)','Vector databases and semantic search','RAG evaluation and chunking strategies','LLM safety and hallucination checks'] },
  { name: 'Time Series and Recommender Systems', icon: '📈', topics: ['Time series components and stationarity','Time-based train-test splitting','ARIMA and forecasting baselines','Recommendation system fundamentals','Content-based filtering','Collaborative filtering','Matrix factorization','Ranking and recommendation evaluation'] },
  { name: 'MLOps and Production AI', icon: '⚙️', topics: ['Reproducible ML experiments','Experiment tracking','Model versioning and registries','Data and model validation','FastAPI model serving','Docker fundamentals','CI/CD for ML applications','Model monitoring and drift detection'] },
  { name: 'Career Preparation', icon: '🎯', topics: ['Data structures and algorithms for Python','SQL interview practice','Statistics and ML interview questions','Explain an ML project end to end','Build a GitHub portfolio','Write an AIML engineer resume','Technical communication and mock interviews'] }
];

// Curated starter resources. Search links are intentionally used where a stable
// single-video URL is not verified; users can choose the most suitable lesson.
export const recommendedVideos = [
  { title: 'Python for Data Science — Full Course', topic: 'Python Programming', kind: 'Video', url: 'https://www.youtube.com/watch?v=CMEWVn1uZpQ', videoId: 'CMEWVn1uZpQ', source: 'freeCodeCamp.org', level: 'Beginner' },
  { title: 'Machine Learning with Python — Full Course', topic: 'Machine Learning', kind: 'Video', url: 'https://www.youtube.com/watch?v=1fcfZ_Ne8ok', videoId: '1fcfZ_Ne8ok', source: 'edureka!', level: 'Beginner → Intermediate' },
  { title: 'Scikit-learn MOOC video playlist', topic: 'Machine Learning', kind: 'Playlist', url: 'https://www.youtube.com/playlist?list=PL2okA_2qDJ-m44KooOI7x8tu85wr4ez4f', source: 'Inria Learning Lab', level: 'Beginner → Advanced' },
  { title: 'NumPy tutorials and practical examples', topic: 'Data Analysis', kind: 'Search lessons', url: 'https://www.youtube.com/results?search_query=NumPy+tutorial+full+course+Python', source: 'YouTube search', level: 'Beginner' },
  { title: 'Pandas data analysis tutorials', topic: 'Data Analysis', kind: 'Search lessons', url: 'https://www.youtube.com/results?search_query=Pandas+Python+data+analysis+tutorial+playlist', source: 'YouTube search', level: 'Beginner → Intermediate' },
  { title: 'Statistics and probability for machine learning', topic: 'Maths for Machine Learning', kind: 'Search lessons', url: 'https://www.youtube.com/results?search_query=StatQuest+statistics+probability+machine+learning', source: 'StatQuest', level: 'Beginner' },
  { title: 'Neural networks from scratch', topic: 'Deep Learning', kind: 'Search lessons', url: 'https://www.youtube.com/results?search_query=Andrej+Karpathy+Neural+Networks+Zero+to+Hero', source: 'Andrej Karpathy', level: 'Intermediate → Advanced' },
  { title: 'PyTorch official tutorials', topic: 'Deep Learning', kind: 'Search lessons', url: 'https://www.youtube.com/results?search_query=PyTorch+official+tutorials+beginner', source: 'PyTorch', level: 'Intermediate' },
  { title: 'Hugging Face NLP and Transformers', topic: 'NLP and Generative AI', kind: 'Search lessons', url: 'https://www.youtube.com/results?search_query=Hugging+Face+NLP+course+Transformers', source: 'Hugging Face', level: 'Intermediate' },
  { title: 'RAG and LLM application development', topic: 'Advanced NLP and LLM Engineering', kind: 'Search lessons', url: 'https://www.youtube.com/results?search_query=RAG+retrieval+augmented+generation+full+course', source: 'YouTube search', level: 'Advanced' },
  { title: 'OpenCV and computer vision projects', topic: 'Computer Vision', kind: 'Search lessons', url: 'https://www.youtube.com/results?search_query=OpenCV+Python+computer+vision+full+course', source: 'YouTube search', level: 'Beginner → Intermediate' },
  { title: 'SQL for data science', topic: 'SQL and Data Engineering', kind: 'Search lessons', url: 'https://www.youtube.com/results?search_query=SQL+full+course+for+data+science', source: 'YouTube search', level: 'Beginner' },
  { title: 'MLOps and model deployment', topic: 'MLOps and Production AI', kind: 'Search lessons', url: 'https://www.youtube.com/results?search_query=MLOps+full+course+model+deployment', source: 'YouTube search', level: 'Advanced' },
  { title: 'Time series forecasting with Python', topic: 'Time Series and Recommender Systems', kind: 'Search lessons', url: 'https://www.youtube.com/results?search_query=time+series+forecasting+Python+machine+learning', source: 'YouTube search', level: 'Intermediate' }
];

export const quizzes = {
  'Python Programming': [
    {q:'Which Python type stores an ordered, mutable collection?',o:['Tuple','List','Set','String'],a:1,e:'A list is ordered and mutable.'},
    {q:'Which keyword defines a function?',o:['func','define','def','function'],a:2,e:'Python uses def to define a function.'},
    {q:'What does len([2, 4, 6]) return?',o:['2','3','6','12'],a:1,e:'There are three elements in the list.'},
    {q:'Which structure stores key-value pairs?',o:['Dictionary','Tuple','Set','Range'],a:0,e:'A dictionary maps keys to values.'},
    {q:'What is the output of 7 // 2?',o:['3.5','4','3','1'],a:2,e:'// performs floor division.'}
  ],
  'Machine Learning': [
    {q:'Which task predicts a continuous numerical value?',o:['Classification','Regression','Clustering','Association'],a:1,e:'Regression predicts continuous values.'},
    {q:'What is the main purpose of a test dataset?',o:['Train the model','Tune every parameter','Evaluate unseen-data performance','Clean the data'],a:2,e:'The test set estimates performance on unseen data.'},
    {q:'Which algorithm is commonly used for clustering?',o:['Linear regression','K-means','Logistic regression','Naive Bayes'],a:1,e:'K-means groups observations into clusters.'},
    {q:'What does overfitting mean?',o:['Model is too simple','Model memorizes training patterns/noise','Dataset has no labels','Training is impossible'],a:1,e:'An overfit model performs well on training data but generalizes poorly.'},
    {q:'Which metric is the fraction of correct predictions?',o:['Accuracy','Recall','Mean squared error','MAE'],a:0,e:'Accuracy is correct predictions divided by total predictions.'}
  ],
  'Data Analysis': [
    {q:'Which Python library is designed for labelled tabular data?',o:['Pandas','Turtle','Requests','Pygame'],a:0,e:'Pandas provides Series and DataFrame structures.'},
    {q:'What does a NumPy array commonly provide?',o:['Only text storage','Efficient numerical operations','Web hosting','Video editing'],a:1,e:'NumPy supports efficient multidimensional numerical arrays.'},
    {q:'Which plot is useful for viewing a distribution?',o:['Histogram','Pie chart only','Network graph','Map'],a:0,e:'A histogram shows the frequency distribution of numerical data.'},
    {q:'What is a missing value often represented as in Pandas?',o:['None only','NaN','False','Zero always'],a:1,e:'NaN is a common marker for missing numerical data.'},
    {q:'What is EDA?',o:['Exploratory Data Analysis','External Data Access','Encoded Data Algorithm','Estimated Dataset Average'],a:0,e:'EDA helps understand data through summaries and visualizations.'}
  ]
};


// Random question generator for all AIML roadmap subjects

function shuffleQuestions(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function createQuestion(question, correctAnswer, wrongAnswers, explanation) {
  const options = shuffleQuestions([
    correctAnswer,
    ...shuffleQuestions(wrongAnswers).slice(0, 3)
  ]);

  return {
    q: question,
    o: options,
    a: options.indexOf(correctAnswer),
    e: explanation
  };
}

export function generateQuiz(subject, count = 10) {
  const subjectData = roadmap.find(item => item.name === subject);

  if (!subjectData) {
    return quizzes[subject] || [];
  }

  const allSubjects = roadmap.map(item => item.name);

  const allTopics = roadmap.flatMap(item =>
    item.topics.map(topic => ({
      topic,
      subject: item.name
    }))
  );

  const otherTopics = allTopics
    .filter(item => item.subject !== subject)
    .map(item => item.topic);

  const otherSubjects = allSubjects.filter(item => item !== subject);

  const generatedQuestions = [];

  // Generate questions from every topic in the selected subject
  subjectData.topics.forEach(topic => {
    const topicOptions = shuffleQuestions(otherTopics).slice(0, 3);

    generatedQuestions.push(
      createQuestion(
        `Which of these topics belongs to ${subject}?`,
        topic,
        topicOptions,
        `${topic} is included in the ${subject} learning roadmap.`
      )
    );

    const subjectOptions = shuffleQuestions(otherSubjects).slice(0, 3);

    generatedQuestions.push(
      createQuestion(
        `The topic "${topic}" is mainly associated with which subject?`,
        subject,
        subjectOptions,
        `${topic} is part of ${subject}.`
      )
    );
  });

  // Include your original manually written questions
  const originalQuestions = quizzes[subject] || [];

  const questionPool = shuffleQuestions([
    ...originalQuestions,
    ...generatedQuestions
  ]);

  // Return a fresh randomized set
  const result = [];

  while (result.length < count && questionPool.length > 0) {
    if (result.length < questionPool.length) {
      result.push(questionPool[result.length]);
    } else {
      const extra = shuffleQuestions(questionPool);
      result.push(extra[0]);
      questionPool.push(extra[0]);
    }
  }

  return shuffleQuestions(result);
}

