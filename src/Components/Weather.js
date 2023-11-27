import { Box, Button, Container, Input, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Weather() {
  const [data, setData] = useState([]);
  const toast = useToast();
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState('');
  const getWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=15873f207b34418f85e143833230911&q=${location==""?"New Delhi":location}&aqi=yes`
      );
      setData(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (location.trim() !== '') {
      getWeather();
    } else {
      toast({
        title: 'Error',
        description: 'Please enter a valid location',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      <Container
        mt={6}
        p="4"
        shadow={"3px 5px 5px 2px blue "}
        borderWidth="2px"
        borderRadius="lg"
      >
        {" "}
        <Input
          placeholder="Enter location (e.g., City, Country)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          mb="2"
        />
        <Button colorScheme="teal" onClick={handleSubmit}>
          Submit
        </Button>
      </Container>
      <Container
        mt={6}
        p="4"
        shadow={"3px 5px 5px 2px blue "}
        borderWidth="2px"
        borderRadius="lg"
      >
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <Text fontSize="3xl" fontWeight="extrabold">
              Weather Details
            </Text>
            {data && (
              <>
                <Text fontSize="3xl" fontWeight="extrabold">
                  Location: {data.location.name}, {data.location.country}
                </Text>
                <Text fontSize="3xl" fontWeight="extrabold">
                  Temperature: {data.current.temp_c}°C
                </Text>
                <Text fontSize="3xl" fontWeight="extrabold">
                  Condition: {data.current.condition.text}
                </Text>
                {/* Add more details as needed */}
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
}
