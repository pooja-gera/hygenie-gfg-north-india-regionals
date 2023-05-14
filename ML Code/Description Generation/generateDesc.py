import os
import openai
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY")

openai.api_key = f"{API_KEY}"

def openai_create(prompt):

    response = openai.Completion.create(
    model="text-davinci-003",
    prompt=prompt,
    temperature=0.9,
    max_tokens=2048,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0.6,
    stop=[" Human:", " AI:"]
    )

    return response.choices[0].text

def generateDescription(text):
    desc_prompt = text+" Refer to this list of reviews by users about a public toilet. Generate a brief description in 65 words about the public toilet. The description would be used to display the details of the toilet in an application used to find toilets nearby. return only the description and don't say anything else."
    description = openai_create(desc_prompt)

    isSafe_prompt = description + " based on this description for the toilet, return a boolean 'isSafe' true if the toilet is safe and false is not safe. return only the boolean and do not say anything else."
    isSafe = openai_create(isSafe_prompt)

    isClean_prompt = description + " based on this description for the toilet, return a boolean 'isClean' true if the toilet is clean and false is not clean. return only the boolean and do not say anything else."
    isClean = openai_create(isClean_prompt)

    return [description,isSafe, isClean]