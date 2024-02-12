'use client';
import React, { useState } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';

import { formSchema } from './constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';
import Image from 'next/image';

const CreateNFT = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const isLoading = form.formState.isSubmitting;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Use optional chaining for safety

    if (file) {
      const reader = new FileReader();

      reader.onload = (event: ProgressEvent<FileReader>) => {
        setSelectedFile(event.target?.result as string); // Cast to string
      };

      reader.onerror = (error: any) => {
        console.error('Error reading file:', error);
        // Handle the error gracefully, e.g., display an error message to the user
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex space-x-2">
      <div className="mt-5 mx-auto">
        <h2 className="text-3xl font-semibold">Create an NFT</h2>
        <p className="text-muted-foreground">
          Once your item is minted you will not be able to change any of its
          information
        </p>
        <Form {...form}>
          <form>
            <div className="flex gap-10 items-start">
              <div className="">
                <Label
                  htmlFor="picture"
                  className="h-[420px] w-[540px] border-2 border-gray-200 border-dashed rounded-xl mt-4 flex items-center justify-center flex-col relative aspect-[0]"
                >
                  <Input
                    type="file"
                    id="picture"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                  {selectedFile ? (
                    <Image
                      src={selectedFile}
                      alt="Preview"
                      className="max-w-full max-h-full overflow-hidden object-cover rounded-lg"
                      fill
                    />
                  ) : (
                    <>
                      <Upload size={32} />
                      <p>Browse file</p>
                      <p className="text-sm text-muted-foreground">
                        Max size:50MB
                      </p>
                      <p className="text-xs text-muted-foreground">
                        JPG, PNG, GIF, SVG, MP4
                      </p>
                    </>
                  )}
                </Label>
              </div>
              <div className="w-[540px] mt-4">
                <Label htmlFor="name">Name *</Label>
                <FormField
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl className="m-0 p-0">
                        <Input
                          className="border w-full p-4 outline-none focus-visible:ring-0 focus-visible:ring-transparent rounded-lg mb-4 mt-2"
                          disabled={isLoading}
                          placeholder="Name your NFT"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Label htmlFor="supply">Supply *</Label>
                <FormField
                  name="supply"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl className="m-0 p-0">
                        <Input
                          className="border w-full p-4 outline-none focus-visible:ring-0 focus-visible:ring-transparent mb-4 mt-2 rounded-lg"
                          disabled={isLoading}
                          placeholder="Enter number of supply"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Label htmlFor="description">Description</Label>
                <FormField
                  name="description"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl className="m-0 p-0">
                        <Textarea
                          className="border w-full p-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent mb-4 mt-2 rounded-lg"
                          disabled={isLoading}
                          placeholder="Description"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Label htmlFor="link">External Link</Label>
                <FormField
                  name="link"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl className="m-0 p-0">
                        <Input
                          className="border w-full p-4 outline-none focus-visible:ring-0 focus-visible:ring-transparent mb-4 mt-2 rounded-lg"
                          disabled={isLoading}
                          placeholder="Enter External Link"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button>Create</Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateNFT;
