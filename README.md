A simple implementation on MUI Textfield input component. 

Design : 
the component uses 2 states one is local the other is external and one for errors, the local is the one that is used in the value and it is the one that suffers the most manipulation, the point is to ensure the correct data flow to context or redux, using one state cause some issues with other interfaces, so I found this to be the best solution in my case of use. 

Key features : 
onFoucus : rests the current value on the user interface
onBlur :  if the input hasn't been changed then it returns the original value
 if unwanted types are used in this case string it shows an error and shows the text that is being typed in. 
the previous point is a (personal reference! you can disable the input completely not allowing any input in by disabling setLocalAmount(value).
if you onBlur with an error on it rests the error not keeping it there, signaling you can try again with right input this time !.
