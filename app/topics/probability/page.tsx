import TopicTemplate from '../../components/TopicTemplate'

export default function Probability() {
  const subTopics = [
    {
      name: 'Basic Probability',
      description: 'Learn the fundamentals of probability theory and its applications.',
      link: '/topics/probability/basic-probability',
    },
    {
      name: 'Probability Distributions',
      description: 'Explore various probability distributions and their characteristics.',
      link: '/topics/probability/probability-distributions',
    },
    {
      name: 'Conditional Probability',
      description: 'Understand how to calculate probabilities based on prior knowledge.',
      link: '/topics/probability/conditional-probability',
    },
  ]

  return (
    <TopicTemplate
      title="Probability"
      description="Probability is the branch of mathematics that deals with the likelihood of events occurring. It provides a framework for understanding and quantifying uncertainty."
      subTopics={subTopics}
    />
  )
}

