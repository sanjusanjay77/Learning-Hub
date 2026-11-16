export const roadmap = [
  { name: 'Python Programming', icon: '🐍', topics: ['Python setup and syntax','Variables and data types','Operators and expressions','Conditions and loops','Functions and modules','Lists, tuples, sets and dictionaries','File handling','OOP fundamentals','Exception handling','Virtual environments and packages'] },
  { name: 'Maths for Machine Learning', icon: '📐', topics: ['Linear algebra basics','Vectors and matrices','Matrix operations','Calculus fundamentals','Derivatives and gradients','Probability basics','Conditional probability and Bayes theorem','Descriptive statistics'] },
  { name: 'Data Analysis', icon: '📊', topics: ['NumPy arrays','NumPy indexing and operations','Pandas Series and DataFrames','Data cleaning','Missing values and duplicates','Data visualization with Matplotlib','Exploratory data analysis'] },
  { name: 'Machine Learning', icon: '🤖', topics: ['ML workflow and terminology','Supervised vs unsupervised learning','Linear regression','Logistic regression','K-nearest neighbours','Decision trees and random forests','Support vector machines','K-means clustering','Train-test split and cross-validation','Feature engineering','Model evaluation metrics','Hyperparameter tuning'] },
  { name: 'Deep Learning', icon: '🧠', topics: ['Neural network fundamentals','Perceptrons and activation functions','Forward and backpropagation','Gradient descent and optimizers','TensorFlow or PyTorch basics','Convolutional neural networks','Recurrent neural networks','Transfer learning'] },
  { name: 'NLP and Generative AI', icon: '💬', topics: ['Text preprocessing','Tokenization and embeddings','Text classification','Attention mechanism','Transformer architecture','Large language model basics','Prompt engineering','Retrieval-augmented generation'] },
  { name: 'Projects and Deployment', icon: '🚀', topics: ['Build a data analysis project','Build a regression project','Build a classification project','Build an end-to-end ML project','Create a simple model API','Deploy a machine learning application','Git and GitHub portfolio'] }
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
