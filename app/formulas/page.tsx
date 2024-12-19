'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

const formulas = [
  {
    category: "Descriptive Statistics",
    items: [
      { name: 'Mean', formula: '\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n}', description: 'The average of a set of numbers' },
      { name: 'Median', formula: 'x_{\\frac{n+1}{2}}', description: 'The middle value in a sorted list of numbers' },
      { name: 'Mode', formula: '\\text{Most frequent value}', description: 'The most frequently occurring value in a dataset' },
      { name: 'Range', formula: 'R = x_{max} - x_{min}', description: 'The difference between the largest and smallest values' },
      { name: 'Variance', formula: 's^2 = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n - 1}', description: 'A measure of variability in a dataset' },
      { name: 'Standard Deviation', formula: 's = \\sqrt{\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n - 1}}', description: 'The square root of the variance' },
      { name: 'Coefficient of Variation', formula: 'CV = \\frac{s}{\\bar{x}} \\times 100\\%', description: 'A standardized measure of dispersion' },
    ]
  },
  {
    category: "Probability",
    items: [
      { name: 'Probability', formula: 'P(A) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}', description: 'The likelihood of an event occurring' },
      { name: 'Conditional Probability', formula: 'P(A|B) = \\frac{P(A \\cap B)}{P(B)}', description: 'The probability of A given that B has occurred' },
      { name: 'Bayes\' Theorem', formula: 'P(A|B) = \\frac{P(B|A)P(A)}{P(B)}', description: 'Calculates conditional probability' },
      { name: 'Binomial Probability', formula: 'P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}', description: 'Probability of k successes in n trials' },
      { name: 'Poisson Probability', formula: 'P(X=k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}', description: 'Probability of k events in a fixed interval' },
    ]
  },
  {
    category: "Inferential Statistics",
    items: [
      { name: 'Z-Score', formula: 'z = \\frac{x - \\mu}{\\sigma}', description: 'Number of standard deviations from the mean' },
      { name: 'Confidence Interval', formula: '\\bar{x} \\pm z_{\\alpha/2} \\cdot \\frac{s}{\\sqrt{n}}', description: 'Range of values likely to contain the population parameter' },
      { name: 'T-Statistic', formula: 't = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}}', description: 'Used in hypothesis testing for small sample sizes' },
      { name: 'Chi-Square Statistic', formula: '\\chi^2 = \\sum \\frac{(O - E)^2}{E}', description: 'Used in tests of independence and goodness of fit' },
      { name: 'F-Statistic', formula: 'F = \\frac{\\text{between-group variability}}{\\text{within-group variability}}', description: 'Used in ANOVA and regression analysis' },
    ]
  },
  {
    category: "Correlation and Regression",
    items: [
      { name: 'Correlation Coefficient', formula: 'r = \\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum_{i=1}^{n} (x_i - \\bar{x})^2} \\sqrt{\\sum_{i=1}^{n} (y_i - \\bar{y})^2}}', description: 'Measures the strength and direction of a linear relationship between two variables' },
      { name: 'Simple Linear Regression', formula: 'y = \\beta_0 + \\beta_1x + \\epsilon', description: 'Models the relationship between two variables' },
      { name: 'Multiple Linear Regression', formula: 'y = \\beta_0 + \\beta_1x_1 + \\beta_2x_2 + ... + \\beta_kx_k + \\epsilon', description: 'Models the relationship between multiple independent variables and a dependent variable' },
      { name: 'Coefficient of Determination', formula: 'R^2 = 1 - \\frac{SS_{res}}{SS_{tot}}', description: 'Proportion of variance in the dependent variable explained by the independent variable(s)' },
    ]
  },
  {
    category: "Sampling Distributions",
    items: [
      { name: 'Standard Error of the Mean', formula: 'SE_{\\bar{x}} = \\frac{s}{\\sqrt{n}}', description: 'The standard deviation of the sampling distribution of the mean' },
      { name: 'Central Limit Theorem', formula: '\\bar{X} \\sim N(\\mu, \\frac{\\sigma^2}{n})', description: 'The sampling distribution of the mean approaches a normal distribution as sample size increases' },
    ]
  },
  {
    category: "Probability Distributions",
    items: [
      { name: 'Normal Distribution PDF', formula: 'f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}(\\frac{x-\\mu}{\\sigma})^2}', description: 'Probability density function of the normal distribution' },
      { name: 'Exponential Distribution PDF', formula: 'f(x) = \\lambda e^{-\\lambda x}', description: 'Probability density function of the exponential distribution' },
      { name: 'Uniform Distribution PDF', formula: 'f(x) = \\frac{1}{b-a}', description: 'Probability density function of the uniform distribution' },
    ]
  },
]

export default function Formulas() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredFormulas = formulas.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-purple-900 dark:text-purple-100">Statistical Formulas</h1>
      
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search formulas..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      {filteredFormulas.map((category) => (
        <div key={category.category} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.items.map((formula) => (
              <div key={formula.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">{formula.name}</h3>
                <div className="mb-4">
                  <img
                    src={`https://latex.codecogs.com/svg.latex?${encodeURIComponent(formula.formula)}`}
                    alt={formula.name}
                    className="mx-auto dark:invert"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-400">{formula.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

