"use client"

import { useGetUsers } from "@/features/users/use-get-users";

export default function Home() {

  const dataQuery = useGetUsers();
  // actually me bohot kuch ata hai query ko call karne se, but hmko sirf data chahiye to data likha
  const data = dataQuery.data || [];
  console.log(dataQuery)
 

  const isLoading = dataQuery.isLoading;

  if (isLoading) {
    return (
      <div>loading users</div>
    )
  }

  return (
    <div>
      {
        data.map((x)=>(
          <div>{x.name}{x.email}</div>
        ))
      }
    </div>
  );
}