import { Button, Center, FormControl, FormLabel, Input, Radio, RadioGroup, Select, Stack, Textarea } from '@chakra-ui/react';
import './App.css';
import { Field, Form, Formik } from 'formik';

function App() {
  return (
    <Stack align="center" >
      <Center minH="100vh" >
        <Formik initialValues={{ name: "", 
        phone: "", 
        password: "", 
        gender: " ", 
        qualification:"", 
        dob:"", 
        about:"",
        social: [], 
      }} 

        onSubmit={(values) => {
          console.log(values)
        }}>

          {() => (
            <Form>
              <Stack border="1px solid gray" p={5} borderRadius="10px" w="600px">
                <Field name="name" >
                  {({ field, meta }) => (
                    <FormControl isInvalid={(meta.error && meta.touched)}>
                      <FormLabel htmlFor='name'>Name:</FormLabel>
                      <Input name="name" type="text" {...field} />
                    </FormControl>
                  )}
                </Field>

                <Field name="phone" >
                  {({ field, meta }) => (
                    <FormControl isInvalid={(meta.error && meta.touched)}>
                      <FormLabel htmlFor='phone'>Phone:</FormLabel>
                      <Input name="phone" type="phone" {...field} />
                    </FormControl>
                  )}
                </Field>

                <Field name="dob" >
                  {({ field, meta }) => (
                    <FormControl isInvalid={(meta.error && meta.touched)}>
                      <FormLabel htmlFor='dob'>Date of Birth:</FormLabel>
                      <Input name="dob" type="date" {...field} />
                    </FormControl>
                  )}
                </Field>

                <Field name="password" >
                  {({ field, meta }) => (
                    <FormControl isInvalid={(meta.error && meta.touched)}>
                      <FormLabel htmlFor='password'>Password:</FormLabel>
                      <Input name="password" type="password" {...field} />
                    </FormControl>
                  )}
                </Field>

                <Field name="gender" >
                  {({ field, meta }) => (
                    <FormControl isInvalid={(meta.error && meta.touched)}>
                      <RadioGroup name="gender"  >
                        <FormLabel htmlFor='gender'>Gender:</FormLabel>
                        <Stack direction='row'>
                          <Radio {...field} value='male'>Male</Radio>
                          <Radio {...field} value='female'>Female</Radio>
                        </Stack>
                      </RadioGroup>
                    </FormControl>
                  )}
                </Field>

                <Field name="qualification" >
                  {({ field, meta }) => (
                    <FormControl isInvalid={(meta.error && meta.touched)}>
                      <FormLabel htmlFor='qualification'>Password:</FormLabel>
                      <Select placeholder='Select option' name='qualification' {...field}>
                        <option  value='option1'>Option 1</option>
                        <option  value='option2'>Option 2</option>
                        <option  value='option3'>Option 3</option>
                      </Select>
                    </FormControl>
                  )}
                </Field>

                <Field name="social" >
                  {({ field, meta }) => (
                    <FormControl isInvalid={(meta.error && meta.touched)}>
                      <FormLabel >Add Social Link:-</FormLabel>
                      <FormLabel htmlFor='social'>Facebook:</FormLabel>
                      <Input name="social[0]" type="url" {...field} />
                      <FormLabel htmlFor='social.youtube'>Youtube:</FormLabel>
                      <Input name="social[1]" type="url" {...field} />
                    </FormControl>
                  )}
                </Field>

                <Field name="about" >
                  {({ field, meta }) => (
                    <FormControl isInvalid={(meta.error && meta.touched)}>
                      <FormLabel htmlFor='about'>About:</FormLabel>                      
                      <Textarea name="about" placeholder='Here is a sample placeholder' {...field} />
                    </FormControl>
                  )}
                </Field>

                <Button type='submit'>Submit</Button>
              </Stack>
            </Form>
          )}

        </Formik>
      </Center>

    </Stack>
  );
}

export default App;
