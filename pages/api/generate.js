import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const animal = req.body.animal || '';
  console.log("animal", animal)
  if (animal.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid animal",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(animal),
      max_tokens: 500,
      temperature: 0.6,
    });
    console.log("completion", completion)
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
    console.log("capitalizedAnimal", capitalizedAnimal)
  return `Provide a response to the question?.

Question: How do I adopt a pet? 
Answer: Adopting a pet can be a rewarding and fulfilling experience, but it's important to approach it with thought and care. Here are some general steps you can take to adopt a pet. Determine the type of pet that best fits your lifestyle and living situation. Consider factors such as the size of your home, the amount of time you have to spend with the pet, and your budget for pet care. Research local animal shelters, rescues, and adoption agencies in your area. Look for organizations that have a good reputation and a track record of caring for animals.
Visit the shelter or rescue to meet the pets available for adoption. Spend time with the animals to get a sense of their personality and energy level. Ask questions about the pet's history, health, and behavior.

Question: ${capitalizedAnimal}
Answer:`;
}
