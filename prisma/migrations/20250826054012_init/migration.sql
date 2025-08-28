-- CreateTable
CREATE TABLE "CV" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "Basics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cvId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "shareImage" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "workingStatus" BOOLEAN NOT NULL,
    "job" TEXT,
    "url" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    CONSTRAINT "Basics_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "CV" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Location" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "basicsId" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    CONSTRAINT "Location_basicsId_fkey" FOREIGN KEY ("basicsId") REFERENCES "Basics" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "basicsId" INTEGER NOT NULL,
    "network" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    CONSTRAINT "Profile_basicsId_fkey" FOREIGN KEY ("basicsId") REFERENCES "Basics" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Work" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cvId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "summary" TEXT NOT NULL,
    CONSTRAINT "Work_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "CV" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WorkHighlight" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "workId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    CONSTRAINT "WorkHighlight_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Volunteer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cvId" INTEGER NOT NULL,
    "organization" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "summary" TEXT NOT NULL,
    CONSTRAINT "Volunteer_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "CV" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VolunteerHighlight" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "volunteerId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    CONSTRAINT "VolunteerHighlight_volunteerId_fkey" FOREIGN KEY ("volunteerId") REFERENCES "Volunteer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Education" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cvId" INTEGER NOT NULL,
    "institution" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "studyType" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "score" TEXT NOT NULL,
    CONSTRAINT "Education_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "CV" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EducationCourse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "educationId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "EducationCourse_educationId_fkey" FOREIGN KEY ("educationId") REFERENCES "Education" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Award" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cvId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "awarder" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    CONSTRAINT "Award_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "CV" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cvId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "issuer" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    CONSTRAINT "Certificate_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "CV" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Publication" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cvId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "releaseDate" DATETIME NOT NULL,
    "url" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    CONSTRAINT "Publication_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "CV" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cvId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "bgColor" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    CONSTRAINT "Skill_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "CV" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SkillKeyword" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "skillId" INTEGER NOT NULL,
    "keyword" TEXT NOT NULL,
    CONSTRAINT "SkillKeyword_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Language" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cvId" INTEGER NOT NULL,
    "language" TEXT NOT NULL,
    "fluency" TEXT NOT NULL,
    CONSTRAINT "Language_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "CV" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Interest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cvId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "Interest_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "CV" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InterestKeyword" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "interestId" INTEGER NOT NULL,
    "keyword" TEXT NOT NULL,
    CONSTRAINT "InterestKeyword_interestId_fkey" FOREIGN KEY ("interestId") REFERENCES "Interest" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Reference" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cvId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    CONSTRAINT "Reference_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "CV" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cvId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "public" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "github" TEXT,
    CONSTRAINT "Project_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "CV" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProjectHighlight" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    CONSTRAINT "ProjectHighlight_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProjectTechnology" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "ProjectTechnology_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Basics_cvId_key" ON "Basics"("cvId");

-- CreateIndex
CREATE UNIQUE INDEX "Location_basicsId_key" ON "Location"("basicsId");
