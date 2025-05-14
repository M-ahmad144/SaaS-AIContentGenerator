"use client";
import React, { useContext, useState } from "react";
import FormSection from "./_components/FormSection";
import OutputSection from "./_components/OutputSection";
import template from "@/app/(data)/template";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import NextLink from "next/link";
import { chatSession } from "@/utils/Aimodel";
import connectToDB from "@/utils/db"; // Import your MongoDB connection
import AIOutput from "@/utils/schema"; // Assuming this contains your Mongoose model for AIOutput
import { useUser } from "@clerk/nextjs";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent({ params }: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = template.find(
    (item) => item.slug === params["template-slug"]
  );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();
  const router = useRouter();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);

  const GenerateAIContent = async (formData: any) => {
    if (totalUsage >= 40000) {
      console.log("Please Upgrade");
      router.push("/dashboard/billing");
      return;
    }

    try {
      setLoading(true);
      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalPrompt = JSON.stringify(formData) + "," + selectedPrompt;
      const result = await chatSession.sendMessage(finalPrompt);
      const responseText = await result.response.text();

      setAiOutput(responseText);
      await SaveInDb(formData, selectedTemplate?.slug, responseText, user);
    } catch (err) {
      console.error("Error generating content:", err);
    } finally {
      setLoading(false);
    }
  };

  const SaveInDb = async (
    formData: any,
    slug: any,
    aiResp: string,
    user: any
  ) => {
    try {
      // Ensure DB connection is established
      await connectToDB(); // Connect to DB

      // Insert into the MongoDB collection
      const newOutput = new AIOutput({
        formData,
        aiResponse: aiResp,
        templateSlug: slug,
        createdBy:
          user?.primaryEmailAddress?.emailAddress || "default@example.com",
        createdAt: new Date().toISOString(),
      });

      await newOutput.save(); // Save to MongoDB
    } catch (error) {
      console.error("Error saving to DB:", error);
    }
  };

  return (
    <div className="p-10">
      <NextLink href="/dashboard">
        <Button>
          <ArrowLeft /> Back
        </Button>
      </NextLink>

      <div className="gap-5 grid grid-cols-2 md:grid-cols-3 py-5">
        {/* FormSection */}
        <FormSection
          selectedTemplate={selectedTemplate}
          useFormInput={GenerateAIContent}
          loading={loading}
          setLoading={setLoading}
        />

        {/* OutputSection */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
